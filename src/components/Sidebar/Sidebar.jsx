import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/category/get");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHAF1us5tkwG3A6ngAl5TLEzT4ZXNzne9jg&usqp=CAU"
          alt=""
        ></img>
        <p>I Like travelling,games,food,sport. </p>
      </div>
      <div className="sideBarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <React.Fragment key={c._id}>
              <Link to={`/?cat=${c.name}`} className="link">
                <li key={c._id} className="listItem">
                  {c.name}
                </li>
              </Link>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fa-brands fa-twitter"></i>
          <i className="sidebar-icon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
