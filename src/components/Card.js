import React from 'react'
import styles from "../styles/Card.module.css";
function Card({image,title}) {
  return (
    <div className={styles.card}>
      <div className={styles.circleContainer}>
      <div className={`${styles.circle1} ${styles.circle}`}></div>
      <div className={`${styles.circle2} ${styles.circle}`}></div>
      <div className={`${styles.circle3} ${styles.circle}`}></div>
     </div>
     <div className={styles.imgContainer}>
        <img src={image} alt="" />
     </div>
     <h3 className={styles.title}>
        {title}
     </h3>
    </div>
  )
}

export default Card