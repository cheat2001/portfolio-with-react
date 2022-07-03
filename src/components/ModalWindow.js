
import React from 'react'
import styles from "../styles/ModalWindow.module.css";
import {useState,useEffect} from "react";
function ModalWindow({state}) {
    const [mode,setMode]=useState({});
    console.log(state);
    
  return (
    <>
    <div  style={mode} className={styles.ModalWindow}>
        <h1>Information Message</h1>
        <div className={styles.containerCircle} onClick={()=>{
               state(false);
            
        }}>
            <div className={`${styles.circle} ${styles.circle1}`}></div>
            <div className={`${styles.circle} ${styles.circle2}`}></div>
            <div className={`${styles.circle} ${styles.circle3}`}></div>
        </div>
        <p className={styles.info}>Sorry! I didn't deploy this project yet!</p>
    </div>
    <div style={mode} className={styles.overlay}></div>
    </>
  )
}

export default ModalWindow