import React from 'react';

import SecondaryNavigation from '../SecondaryNavigation';
import { images } from '../../constants';
import styles from './Navigation.module.css';

const navigation = ['Home', 'Tv Shows', 'Movies', 'New & Popular', 'My List'];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.mainNavigation}>
        <img src={images.logo} alt="logo" className={styles.logo} />
        <ul className={styles.navigationList}>
          {navigation.map(item => (
            <li className={styles.navigationItem} key={item}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <SecondaryNavigation />
    </nav>
  );
};

export default Navigation;
