import React from 'react';

import styles from './FooterLinks.module.css';

const Links = [
  'Audio and Subtitles',
  'Audio Description',
  'Help Center',
  'Gift Cards',
  'Media Center',
  'Investor Relations',
  'Jobs',
  'Terms of Use',
  'Privacy',
  'Legal Notices',
  'Cookie Preferences',
  'Impressum',
  'Contact Us',
];

const FooterLinks = () => {
  return (
    <ul className={styles.linkList}>
      {Links.map(link => (
        <li className={styles.link} key={link}>
          <a href="/">{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
