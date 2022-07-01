import React from 'react'
import styles from "../styles/SkillProgress.module.css";
function SkillProgress({image,percentage}) {
  return (
    <div className={styles.SkillProgress}>
         <img src={image} alt="" />
         <div className={styles.progress}>
            <div style={{width:percentage}} className={styles.progressPercentage}></div>
         </div>
         <p className={styles.percentage}>{percentage}</p>
    </div>
  )
}

export default SkillProgress