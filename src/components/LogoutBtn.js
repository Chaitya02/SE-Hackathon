import { useNavigate } from "react-router-dom";
import './Home.css';
import axios from "axios";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="btn btn-outline-dark btn-lg" onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;