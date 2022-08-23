import React from 'react'
import styles from "../styles/Slide.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Slide() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
    
  };
  return (
    <div className={styles.Container}>
        <Slider styles={{borderRadius:"10px"}} {...settings}>
          <div className={styles.Slide}>
            <p> “ Just one small positive thought in the morning can change your whole day. ”</p>
            <h5>[ Dalai Lama ]</h5>
          </div>
          <div  className={styles.Slide}>
            <p> “ Friday sees more smiles than any other day of the workweek! ”</p>
            <h5>[ Kate Summers ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “If you can't yet do great things, do small things in a great way.”</p>
            <h5>[ Napoleon Hill ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “Start where you are. Use what you have. Do what you can.”</p>
            <h5>[ Arthur Ashe ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “If there is no struggle, there is no progress.”</p>
            <h5>[ Frederick Douglass ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “Everything you can imagine is real.”</p>
            <h5>[ Pablo Picasso ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “Happiness is not something ready made. It comes from your own actions.”</p>
            <h5>[ Dalai Lama XIV ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “The hard days are what make you stronger.”</p>
            <h5>[ Aly Raisman ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “Work hard in silence, let your success be the noise.”</p>
            <h5>[ Frank Ocean ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “Dreams don’t work unless you do.”</p>
            <h5>[ John C. Maxwell ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “You must do the thing you think you cannot do.” </p>
            <h5>[ Eleanor Roosevelt ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “A goal is a dream with a deadline.” </p>
            <h5>[ Napoleon Hill ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “You can’t let your failures define you. You have to let your failures teach you.” </p>
            <h5>[ Barack Obama ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “Life is like riding a bicycle. To keep your balance, you must keep moving.” </p>
            <h5>[ Albert Einstein ]</h5>
          </div>
          <div className={styles.Slide}>
            <p> “Losers quit when they fail. Winners fail until they succeed.” </p>
            <h5>[ Robert T. Kiyosaki
 ]</h5>
          </div>
        </Slider>
    </div>
  )
}

export default Slide