import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../../redux/apiCalls";
//import { useSelector } from "react-redux";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    login({ username, password }, dispatch);
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" onClick={handleLogin}>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Login
          </Link>
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Register
        </Link>
      </button>
    </div>
  );
}
