import React from 'react';

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          <a href="mailto:sadikyasin492@gmail.com">sadikyasin492@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/linkedinIcon.png')}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/md-soyeb-639593213/">md-soyeb</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
          <a href="https://www.linkedin.com/in/sadik-yasin-0654a0201">
            sadik-yasin
          </a>
        </li>
      </ul>
    </footer>
  );
};
