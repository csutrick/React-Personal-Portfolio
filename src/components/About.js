import React from "react";

import styles from '../styles/About.module.css';

export default function About() {
  console.log('Page about rendered');
  return (
    <div className={styles.container}>
      <div className={styles.container_aboutMe}>
        <span className={styles.page_title}>Full Stack Developer</span>
        <div className={styles.profile}>
          <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
          alt="Profile"
          className={styles.profile_pic}
          ></img>
          <span className={styles.user_desc}>Cole Sutrick</span>
          <p className={styles.about_me}>
          My names Cole and im studying full stack developing to build web 
          applications from front to back. Learning in JavaScript, React, Node.js, 
          and MongoDB; able to quickly learn and master new technologies. 
          Constanly learning and applying skills with attention to detail 
          to build high-quality, user-friendly web apps and sites.
          </p>
        </div>
      </div>
    </div>
  );
};