import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

import axios from "axios";
//import { useSelector } from "react-redux";

const Home = () => {
  // const user = useSelector((state) => state.user.userInfo);

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/post" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="home">
      <Header />
      <div className="postsAndSidebar">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
