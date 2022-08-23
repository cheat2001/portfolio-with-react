import React from 'react'
import Animation from '../components/Animation'
import styles from "../styles/Home.module.css";
import img from "../images/frame.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import Typed from "react-typed";
function Home() {
  const navigate = useNavigate();
  return (
   <Animation>
     <div className={styles.home}>
     
          <div className={styles.homeLeftSide}>
            <p className={styles.welcomeToMyPortfolio}>
              <Typed strings={["Welcome To My Portfolio","Nice To See you here","Greetings from the Portfolio"]} typeSpeed={100} loop/>
              <div className={styles.wave}></div>
            </p>
            <h1 className={styles.HiImChansocheat}>
              Hi I'm <span className={styles.chansocheat}>Chansocheat</span>
            </h1>
            <h1 className={styles.major}>Computer Science Student</h1>
            
            <p className='content'>
            I’m Chansocheat, the kind of person that‘s curious about a new technology that’s sweeping around the world. I am really crazy about coding.
            </p>
          </div>
          <div onClick={()=>{
               navigate("/about")
          }} className={styles.homeRightSide}>
            <img src={img} alt="" />
          </div>
    </div>
   </Animation>
  )
}

export default Home