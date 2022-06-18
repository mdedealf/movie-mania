import React from 'react';

import { images } from '../../constants';
import styles from './Segment.module.css';

const Segment = ({ title }) => {
  return (
    <div className={styles.segment}>
      <div className={styles.segmentHeader}>
        <p className={styles.segmentTitle}>{title}</p>
        <img src={images.chevronRightSlider} alt="" />
      </div>
      <div className={styles.segmentList}>
        <img src={images.thumbnailTopTenH} alt="" />
        <img src={images.thumbnailTopTenH} alt="" />
        <img src={images.thumbnailTopTenH} alt="" />
        <img src={images.thumbnailTopTenH} alt="" />
        <img src={images.thumbnailTopTenH} alt="" />
        <img src={images.thumbnailTopTenH} alt="" />
        <img src={images.thumbnailTopTenH} alt="" />
        <img src={images.thumbnailTopTenH} alt="" />
        <button type="button" className={styles.segmentNextButton}>
          <img src={images.chevronRightSlider} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Segment;
