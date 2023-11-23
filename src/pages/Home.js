import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Search from "./Search";

export default function Home() {
  return (
    <div>
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/about">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />
          <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
        </div>
      </div>

      <div className="home__body">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"></img>
      </div>
      <div className="home__inputContainer">
        <Search hideButtons/>
      </div>
    </div>
  );
}
