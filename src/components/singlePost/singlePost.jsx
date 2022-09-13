import React, { useEffect, useState } from "react";
import "./singlePost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);

  const user = useSelector((state) => state.user.userInfo);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/post/get/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:5000/api/post/delete/" + post._id, {
        data: { username: user.username },
      });
      window.location.assign("/");
    } catch (err) {
      console.log(err);
    }
  };

  const updatePost = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/post/update/" + post._id,
        {
          username: user.username,
          title,
          desc,
        }
      );
      console.log(post.title);
      setPost(res.data);
      setUpdate(false);
      window.location.reload();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="Wrapper">
        {post.photo && (
          <img alt="" className="singlePostImage" src={PF + post.photo} />
        )}
        <div className="postDetails ">
          {update ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="upTitle"
            />
          ) : (
            <h1 className="singlePostTitle">{post.title}</h1>
          )}

          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i
                className="edit-icon fa-solid fa-pen-to-square"
                onClick={() => setUpdate(true)}
              ></i>
              <i
                className="delete-icon fa-solid fa-trash"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </div>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              {" "}
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{post.createdAt}</span>
        </div>

        {update ? (
          <input
            type="textarea"
            className="upDesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p>{post.desc}</p>
        )}

        {update && (
          <button className="updateButton" onClick={updatePost}>
            Update Post
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
