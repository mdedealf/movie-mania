import React from 'react';

import SocialLinks from '../SocialLinks';
import FooterLinks from '../FooterLinks';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.box}>
      <div className={styles.socialLinks}>
        <SocialLinks />
      </div>
      <div className={styles.footerLinks}>
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
