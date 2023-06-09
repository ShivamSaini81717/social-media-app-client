import React, { useState } from 'react'
import "./Header.css"
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
} from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [tab, setTab] = useState(window.location.pathname);

  return (

<div className="header">


<Link to="/" onClick={() => setTab("/")}>
{tab === "/" ? <Home style={{ color: "black" }} /> : <HomeOutlined />}
 </Link>


<Link to="/newpost" onClick={() => setTab("/newpost")}>
{tab === "/newpost" ? (
          <Add style={{ color: "black" }} />
        ) : (
          <AddOutlined />
        )}
          </Link>


<Link to="/search" onClick={() => setTab("/search")}>
{tab === "/search" ? (
          <Search style={{ color: "black" }} />
        ) : (
          <SearchOutlined />
        )}
</Link>


<Link to="/account" onClick={() => setTab("/account")}>
{tab === "/account" ? (
          <AccountCircle style={{ color: "black" }} />
        ) : (
          <AccountCircleOutlined />
        )}
</Link>


<Link to="/chat" onClick={() => setTab("/chat")}>
{tab === "/chat" ? (
          <ChatIcon  style={{ color: "black" }} />
        ) : (
          <ChatBubbleOutlineIcon />
        )}

</Link>

</div>


  )
}
