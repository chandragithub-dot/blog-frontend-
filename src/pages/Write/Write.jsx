import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./write.css";

const Write = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/post/create",
        newPost
      );
      console.log(res);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="formImage" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="formGroup1">
          <label htmlFor="enterFile">
            <i className="icon-add fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="enterFile"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
          <input
            type="text"
            id="entertext"
            className="writeTitle"
            placeholder="Your title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="formGroup2">
          <textarea
            type="text"
            placeholder="write your story..."
            className="writeStory"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="submitButton">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
