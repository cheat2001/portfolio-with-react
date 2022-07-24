import React from 'react'
import styles from "../styles/Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useState} from "react";

function Navbar() {


  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#CFECE7" : "#12463D",
    };
  };

  const toggle={
    opacity:1,
    pointerEvents: "all", 
    transition:"0.6s",
    transitionDelay:"0.1s",
  }
  const navChange={
    height:"300px",
    flexDirection: "column",
    paddingTop: "15px",
    justifyContent: "flex-start",
  }
  const line1={
    position:"absolute",
    transform: "rotate(45deg)"
  }
  const line3={
    position:"absolute",
    transform: "rotate(-45deg)"
  }
  const line2={
    position:"absolute",
    opacity:0
  }
const [state,setState]=useState(false);
const overlayStyle={
  pointerEvents: "none"
}
  return (
    <>
    <nav style={state?navChange:{}} className={styles.navbar}>
        <div className={styles.logo}><span className={styles.port}>port</span><span className={styles.folio}>folio</span></div>
        <ul style={state?toggle:{}}>
             <li>
                 <NavLink style={navLinkStyle} to={"/"}>HOME</NavLink>
             </li>
             <li>
                 <NavLink style={navLinkStyle} to={"/about"}>ABOUT</NavLink>
             </li>
             <li>
                 <NavLink style={navLinkStyle} to={"/skills"}>SKILLS</NavLink>
             </li>
             <li>
                 <NavLink style={navLinkStyle} to={"/projects"}>PROJECTS</NavLink>
             </li>
             <li>
                 <NavLink style={navLinkStyle} to={"/contact"}>CONTACT</NavLink>
             </li>
        </ul>
        <div onClick={()=>{
          setState(pre=>!pre);
        }} className={styles.toggle}>
            <div style={state?line1:{}} className={`${styles.line} ${styles.line1}`}></div>
            <div style={state?line2:{}} className={`${styles.line} ${styles.line2}`}></div>
            <div style={state?line3:{}} className={`${styles.line} ${styles.line3}`}></div>

        </div>
    </nav>
    {/* <div style={state?{}:overlayStyle} onMouseOver={()=>{
     setState(false);
    }} className={styles.overlay}></div> */}
    </>
  )
}

export default Navbar