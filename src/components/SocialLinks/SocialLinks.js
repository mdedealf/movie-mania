import React from 'react';

import { images } from '../../constants';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.box}>
      <a href="https://facebook.com">
        <img src={images.facebook} alt="facebook" />
      </a>
      <a href="https://instagram.com">
        <img src={images.instagram} alt="facebook" />
      </a>
      <a href="https://twitter.com">
        <img src={images.twitter} alt="facebook" />
      </a>
      <a href="https://youtube.com">
        <img src={images.youtube} alt="facebook" />
      </a>
    </div>
  );
};

export default SocialLinks;
