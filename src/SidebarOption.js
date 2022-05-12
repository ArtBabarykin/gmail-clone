import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, Number, selected }) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{Number}</p>
    </div>
  );
}

export default SidebarOption;
