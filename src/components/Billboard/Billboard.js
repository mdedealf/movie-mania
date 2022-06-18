import React from 'react';

import { images } from '../../constants';
import styles from './Billboard.module.css';

const Billboard = () => {
  return (
    <div className={styles.billboard}>
      <div className={styles.innerBillboard}>
        <img
          src={images.billboard}
          alt="Abstract"
          className={styles.billboardHeroImage}
        />
        <div className={styles.billboardFadeOut}></div>
        <div className={styles.billboardInfo}>
          <img src={images.billboardTitle} alt="Abstract: The Art of Design" />
          <div className={styles.billboardDescription}>
            Step inside the minds of the most innovative designers in a variety
            of disciplines and learn how design impacts every aspect of life.
          </div>
          <div className={styles.billboardLinks}>
            <a type="button" href="/">
              <img src={images.play} alt="play-icon" />
              <span>Play</span>
            </a>
            <button type="button" href="/">
              <img src={images.info} alt="info-icon" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
