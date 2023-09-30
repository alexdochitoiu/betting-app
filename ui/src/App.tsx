import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EventsPage from "./pages/EventsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { withAuth } from "./withAuth";
import { LogoutButton } from "./components/LogoutButton";
import { isLoggedIn } from "./services/auth";

const Home = () => isLoggedIn() ? <EventsPage /> : <LoginPage/>;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/events" element={withAuth(<EventsPage />)} />
        </Routes>
        <LogoutButton />
      </Router>
    </>
  );
}

export default App;
