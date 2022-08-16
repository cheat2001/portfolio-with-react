import React from 'react'
import styles from "../styles/Footer.module.css";
import qrcode from "../images/qrcode.png";
function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.Contact}>
            <p>Scan To Contact Me</p>
            <img src={qrcode} alt="" />
        </div>
        <p>©2022 Sok Chansocheat</p>
    </div>
  )
}

export default Footer