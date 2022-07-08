import React from 'react'
import Animation from '../components/Animation'
import styles from "../styles/Contact.module.css";
import SocialMedia from '../components/SocialMedia';
import Facebook from "../images/facebook-logo.png"
import Linkedin from "../images/linkedin.png"
import Github from "../images/github.png"
import Twitter from "../images/twitter.png"

function Contact() {
  return (
    <Animation>
       <div className={styles.contact}>
       <div className={styles.animate}></div>
       <div className={styles.socialMedia}>

        <h1>Social Media</h1>
         <div className={styles.socialMediaContainer}>
         <SocialMedia url="https://web.facebook.com/sok.chansocheat.1" image={Facebook}/>
          <SocialMedia url="https://www.linkedin.com/in/chansocheat-sok-55a03b243/"  image={Linkedin}/>
         
          <SocialMedia url="https://github.com/cheat2001"  image={Github}/>
          <SocialMedia url="https://twitter.com/ChansocheatS" image={Twitter}/>
         </div>
         <h1>Phone Number</h1>
         <h3>096 5674 357</h3>
         <h3>067 801 966</h3>
         <h1>E-Mail</h1>
         <h3><a href = "mailto: chansocheatsok2001@gmail.com">chansocheatsok2001@gmail.com</a></h3>
         <h3><a href = "mailto: cheats925@gmail.com">cheats925@gmail.com</a></h3>
       </div>
</div>
    </Animation>
  )
}

export default Contact