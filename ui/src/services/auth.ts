import decode from "jwt-decode";
import { apiUrl, tokenKey } from "../global";

const setToken = (token: string) => {
  localStorage.setItem(tokenKey, token);
};

const getToken = () => {
  return localStorage.getItem(tokenKey);
};

const logout = () => {
  localStorage.removeItem(tokenKey);
};

const isLoggedIn = (): boolean => {
  const token = getToken();
  if (!token) {
    return false;
  }
  const { exp } = decode<{ exp: number }>(token);
  if (exp < Date.now() / 1000) {
    return false;
  }
  return true;
};

const getUserEmail = (): string => {
  const token = getToken();
  if (!token) {
    return "";
  }
  const { email } = decode<{ email: string }>(token);
  return email;
};

const login = async (email: string, password: string) =>
  fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data?.token) {
        throw new Error(data.message || "Login failed");
      }
      setToken(data.token);
    });

const register = async (email: string, password: string) =>
  fetch(`${apiUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

export { login, register, logout, getToken, getUserEmail, isLoggedIn };
