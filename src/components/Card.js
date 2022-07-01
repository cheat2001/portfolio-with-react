import React from 'react'
import styles from "../styles/Card.module.css";
function Card({image,title}) {
  return (
    <div className={styles.card}>
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