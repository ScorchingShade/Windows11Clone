import React from 'react'
import classes from './taskbar.module.css'
import taskimg from '../public/icons.PNG'
import Image from 'next/image'
import taskright from '../public/taskbarright.PNG'


function Taskbar(props) {


    const handleOpen=()=>{
        props.onClick();
    }

    return (
        <div className={classes.taskbar} onClick={handleOpen}>
            <Image src={taskimg} alt="taskbar windows 11" ></Image>
            <div className={classes.taskright} > 
            <Image src={taskright} alt="task right" height="40%"></Image>
            </div>
       
            
        </div>
    )
}

export default Taskbar
