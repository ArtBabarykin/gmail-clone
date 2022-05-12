import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton } from "@mui/material";
import { ArrowDropDown, Notifications } from "@mui/icons-material";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout({}));
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <IconButton onClick={() => navigate("/test")}>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search mail" type="text" />
        <IconButton>
          <ArrowDropDown className="header__inputCaret" />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Avatar src={user?.photoUrl} onClick={signOut} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
