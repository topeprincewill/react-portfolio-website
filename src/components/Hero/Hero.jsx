import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return( 
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Ogowarifaa</h1>
        <p className={styles.description}>I'm a full-stack developer with multiple projects and internship experience using mostly 
            React and NodeJS. Reach out if you would like to learn more</p>
            <a href="mailto:topeprincewill2025@gmail.com"className={styles.contactBtn}>Contact Me</a>

    </div>
    <img src={getImageUrl("hero/heroImage2.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  );
};
