import styled from "styled-components";
import { Button } from "../components/Button";
import { useState } from "react";
import { register } from "../services/auth";
import { useNavigate } from "react-router-dom";

const StyledRegisterPage = styled.div`
  display: grid;
  justify-items: right;
  gap: 20px;
`;

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Password and confirm password don't match");
      return;
    }
    try {
      const result = await register(email, password);
      if (result.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <h2>Register</h2>
      <StyledRegisterPage>
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
        <div>
          Confirm password:{" "}
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          />
        </div>
        <a href="/login">Already have an account? Login</a>
        <Button onClick={handleRegister}>Register</Button>
      </StyledRegisterPage>
    </>
  );
}
