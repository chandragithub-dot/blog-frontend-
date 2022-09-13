import { Link } from "react-router-dom";
import "./Post.css";
const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && (
        <img className="postImage" alt="" src={PF + post.photo}></img>
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <div className="postCat" key={c._id}>
              {c.name}
            </div>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <div className="postTitle">{post.title}</div>
        </Link>
        <p>{post.desc}</p>
        <hr />
        <span className="timePost">{post.createdAt}</span>
      </div>
    </div>
  );
};

export default Post;
