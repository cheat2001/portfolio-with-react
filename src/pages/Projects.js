import React from 'react'
import Animation from '../components/Animation'
import styles from "../styles/Projects.module.css";
import Card from "../components/Card"
import test from "../images/frame.jpg"
import Kub from "../images/kub.jpg"
import Vaikaorm from "../images/vaikaorm.png"
import Quiz from "../images/quiz.png"
import Telegram from "../images/telegram.png"
import Sabey from "../images/sabey.png"
import More from "../images/more.jpg"
function Projects() {
  return (
    <Animation>
      <div className={styles.projects}>
        <h1 className={styles.title}>
        Projects
        </h1>
       <div className={styles.card}>
       <Card image={Sabey} title="Sabey Clone"/>
       <Card image={Kub} title="Kub PengPaong"/>
       <Card image={Vaikaorm} title="Vai Kaorm"/>
       <Card image={Quiz} title="Khmer Quiz"/>
       <Card image={Telegram} title="Telegram Clone"/>
       <Card image={More} title="And Many More..."/>
       </div>
    </div>
    </Animation>
  )
}

export default Projects