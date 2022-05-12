import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<Add font-size="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Indox" Number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" Number={54} />
      <SidebarOption Icon={AccessTime} title="Snoozed" Number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" Number={54} />
      <SidebarOption Icon={NearMe} title="Sent" Number={54} />
      <SidebarOption Icon={Note} title="Drafts" Number={54} />
      <SidebarOption Icon={ExpandMore} title="More" Number={54} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
