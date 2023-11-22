import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img 
        src={getImageUrl("about/youngboy.jpg")}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with expereince in building responsive 
                    and optimized sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Serverr icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized 
                        and APIs</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Machine Learning Developer</h3>
                    <p>I have experience in building deep learning machine learning models  using python. Skills which I gained during
                        an undergrad research at a world renowned research facility
                    </p>
                </div>
            </li>
        
        </ul>
        </div>
        </section>
  )};
