import React, { Fragment, useState } from "react";
import Taskbar from "./taskbar";
import videom from "../public/video.webm";
import StartMenu from "./startMenu";
import classes from "./mainBody.module.css";

function MainBody() {
    const [menu, setMenu] = useState(false);

    const menuHandler=()=>{
       setMenu(!menu)
    }
  return (
    <Fragment>
      <video autoPlay muted className={classes.videobg}>
        <source src={videom} type="video/webm"></source>
      </video>

      <div className={menu?classes.menuUp:classes.menuDown}>
        <StartMenu />
      </div>

      <Taskbar onClick={menuHandler}></Taskbar>
    </Fragment>
  );
}

export default MainBody;
