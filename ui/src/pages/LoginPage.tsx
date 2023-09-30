import styled from "styled-components";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { isLoggedIn, login } from "../services/auth";
import { useNavigate } from "react-router-dom";

const StyledLoginPage = styled.div`
  display: grid;
  justify-items: right;
  gap: 20px;
`;

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <StyledLoginPage>
        <div>
          E-mail:{" "}
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <a href="/register">Not registered? Click here</a>
        <Button onClick={handleLogin}>Login</Button>
      </StyledLoginPage>
    </>
  );
}
