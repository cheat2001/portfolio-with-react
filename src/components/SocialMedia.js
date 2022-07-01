import React from 'react'
import styles from "../styles/SocialMedia.module.css";
function SocialMedia({image,url}) {
  return (
   <a className={styles.socialMedia} href={url} target={"_blank"}>
    <img src={image} alt="" />
   </a>
  )
}

export default SocialMedia