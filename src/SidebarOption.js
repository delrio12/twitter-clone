import React from 'react';
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
    return (
        //If it is active go ahead and add the sidebar option
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <Icon />
            <h2>{text}</h2>
            
        </div>
    )
}

export default SidebarOption;
