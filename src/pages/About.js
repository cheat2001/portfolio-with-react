import React from 'react'
import Animation from '../components/Animation'
import styles from "../styles/About.module.css";
function About() {
  return (
    <Animation>
      <div className={styles.about}>
        <h1 className={styles.aboutMe}>
        About Me
        </h1>
        <p className={styles.content}>Hey! My name is Sok Chansocheat. I am 93*6/2+42-300 years old. I have been studying as a student at the Royal University of Phnom Penh over 3 years. I chose to major in computer science because I've loved fixing and building some technology equipment since I was a teenager, that bodes well for my interest in a job in IT. I am passionate about leaning new skills and I have completed a number of training courses. When I have some free time I like to research something on the internet, write some code, play soccer, listening to music, and sometimes I also like to play games on my phone as well.
        </p>
    </div>
    </Animation>
  )
}

export default About