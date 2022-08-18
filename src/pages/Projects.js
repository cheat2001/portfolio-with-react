import React from 'react'
import Animation from '../components/Animation'
import styles from "../styles/Projects.module.css";
import Card from "../components/Card"
import Kub from "../images/kub.jpg"
import Vaikaorm from "../images/vaikaorm.png"
import Quiz from "../images/quiz.png"

import Sabay from "../images/sabay.png"
import More from "../images/more.jpg"
import Ac from "../images/ac.png"
function Projects() {
  return (
    <Animation>
      <div className={styles.projects}>
        <div className={styles.title}>
        </div>
       <div className={styles.card}>
       <Card image={Ac} title="ACLEDA Bank Plc. Clone" languages={["React JS"]} link="https://acledabankclone.web.app/"/>
       <Card image={Sabay} title="Sabey Clone" languages={["React JS"]} link="https://sabayclone.web.app/"/>
       <Card image={Kub} title="Kub PengPaong" languages={["HTML","CSS","JavaScript"]} link="https://kubpengpaong.web.app/"/>
       <Card image={Vaikaorm} title="Vai Kaorm" languages={["HTML","CSS","JavaScript"]} link="https://vaikaorm.web.app/"/>
       <Card image={Quiz} title="Khmer Quiz" languages={["HTML","CSS","JavaScript"]} link="https://cheatquiz.pages.dev/"/>
      
       <Card image={More} title="And Many More..."/>
       </div>
    </div>
    </Animation>
  )
}

export default Projects