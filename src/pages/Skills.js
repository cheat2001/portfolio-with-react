import React from 'react'
import Animation from '../components/Animation'
import styles from "../styles/Skills.module.css";
import SkillProgress from '../components/SkillProgress';
import SqlIcon from "../images/sql.png";
import Html5Icon from "../images/html-5.png";
import JsICon from "../images/js.png";
import CssIcon from "../images/css.png";
import JavaIcon from "../images/java.png";
import CppIcon from "../images/cpp.png";
import CSIcon from "../images/c-sharp.png";
import PhpIcon from "../images/php.png";
import ReactIcon from "../images/react.png";
import FigmaIcon from "../images/figma.png";
import PsIcon from "../images/photoshop.png";

function Skills() {
  return (
  <Animation>
      <div className={styles.skills}>
        <h1 className={styles.title}>
         Skills
        </h1>
        <SkillProgress image={Html5Icon} percentage="80%"/>
        <SkillProgress image={CssIcon} percentage="70%"/>
        <SkillProgress image={JsICon} percentage="65%"/>
        <SkillProgress image={ReactIcon} percentage="50%"/>
        <SkillProgress image={SqlIcon} percentage="67%"/>
        <SkillProgress image={JavaIcon} percentage="68%"/>
        <SkillProgress image={CppIcon} percentage="70%"/>
        <SkillProgress image={CSIcon} percentage="60%"/>
        <SkillProgress image={PhpIcon} percentage="59%"/>
        <SkillProgress image={FigmaIcon} percentage="60%"/>
        <SkillProgress image={PsIcon} percentage="52%"/>
    </div>
  </Animation>
  )
}

export default Skills