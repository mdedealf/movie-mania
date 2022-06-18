import React from 'react';
import { images } from '../../constants';
import Segment from '../Segment/Segment';

import styles from './Main.module.css';

const Title = [
  'Popular on Netflix',
  'Continue Watching for Home',
  'Trending Now',
  'Watch It Again',
];

const Main = () => {
  return (
    <div className={styles.main}>
      {Title.map(title => (
        <Segment title={title} key={title} />
      ))}
    </div>
  );
};

export default Main;
