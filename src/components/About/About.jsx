import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Islamic University of Technology</h3>
              <p>B.Sc. in Software Engineering</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Rajuk Uttara Model College</h3>
              <p> Higher Secondary School Certificate</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Rajuk Uttara Model College</h3>
              <p>Secondary School Certificate</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
