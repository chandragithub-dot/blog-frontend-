import React from "react";
import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { update, deleteMyUser } from "../../redux/apiCalls";
import { useState } from "react";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [upCounter, setupCounter] = useState(true);
  const [file, setFile] = useState(null);

  const user = useSelector((state) => state.user.userInfo);

  const dispatch = useDispatch();

  const handleUpdate = async (e) => {
    e.preventDefault();
    //console.log(user);
    const updatedUser = {
      id: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    update(updatedUser, user._id, dispatch);
    console.log(user);
    setupCounter(false);
  };

  const handleDelete = () => {
    try {
      deleteMyUser(user._id, dispatch);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="updateTitle">Update Your Account</span>
          <span className="deleteTitle" onClick={handleDelete}>
            Delete Your Account
          </span>
        </div>
        <form className="settingsForm" onSubmit={handleUpdate}>
          <label className="l">Profile Picture</label>
          <div className="accountPP">
            <img
              alt=""
              className="profileImage"
              src={file ? URL.createObjectURL(file) : user.profilePic}
            ></img>
            <label className="l" htmlFor="userPP">
              <i className="user-icon fa-solid fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="userPP"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label className="l">Username</label>
          <input
            className="i"
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="l">Email</label>
          <input
            className="i"
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="l">Password</label>

          <input
            className="i"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {upCounter ? (
            <button className="settingsSubmit" type="submit">
              Update
            </button>
          ) : (
            <span style={{ color: "green", textAlign: "center" }}>
              User is Updated
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
