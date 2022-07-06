import React from 'react'
import styles from "../styles/Card.module.css";
import ModalWindow from './ModalWindow';
import {useState} from "react";
function Card({image,title,html,css,js,link,info}) {
   const [state,setState]=useState(false);
  return (
    <a href={link} target="_blank" onClick={()=>{
      if(link==undefined){
        // setState(true);
        alert("Oop! Sorry! I haven't deployed this project yet!");
      }
    }}>
      {/* {state&&<ModalWindow infomation={info} state={setState}/>} */}
    <div className={styles.card}>
      <div className={styles.circleContainer} onClick={()=>{
        setState(false)
      }}>
      <div className={`${styles.circle1} ${styles.circle}`}></div>
      <div className={`${styles.circle2} ${styles.circle}`}></div>
      <div className={`${styles.circle3} ${styles.circle}`}></div>
     </div>
     <div className={styles.imgContainer}>
        <img src={image} alt="" />
     </div>
     <p className={styles.title}>{title}</p>
     <div className={styles.titleBlock}>
          <p>{html}</p>
          <p>{css}</p>
          <p>{js}</p>
     </div>
    </div>
    </a>
  )
}

export default Card