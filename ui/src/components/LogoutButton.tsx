import styled from "styled-components";
import { getUserEmail, isLoggedIn, logout } from "../services/auth";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const StyledLogoutButton = styled(Button)`
  position: absolute;
  bottom: 25px;
  right: 25px;
  border-color: blue;
  i {
    font-size: 14px;
  }
`;

export const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    isLoggedIn() && (
      <StyledLogoutButton onClick={handleLogout}>
        Log out <i>({getUserEmail()})</i>
      </StyledLogoutButton>
    )
  );
};
