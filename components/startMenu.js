import React from 'react'
import classes from "./startMenu.module.css"
import menuImg from "../public/startmenu.PNG"
import Image from 'next/image'

function StartMenu() {
    return (
        <div>
              <Image src={menuImg} alt="startMenu"></Image>
            

        </div>
    )
}

export default StartMenu
