import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/singlePost/singlePost";
import "./Single.css";

const Single = () => {
  return (
    <div className="singlePostAndSidebar">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
