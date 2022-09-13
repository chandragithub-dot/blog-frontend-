import Topbar from "./components/Topbar/topbar";
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useEffect } from "react";

function App() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postid" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
