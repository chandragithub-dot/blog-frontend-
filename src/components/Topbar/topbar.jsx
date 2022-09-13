import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { logout } from "../../redux/userSlice";
import "./topbar.css";
import { useEffect } from "react";

const Topbar = () => {
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    window.location.replace("/login");
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
        <i className="top-icon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" alt="" src={user.profilePic} />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="top-icon-image fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
