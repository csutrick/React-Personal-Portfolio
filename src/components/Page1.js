import React from "react";

import styles from '../styles/Page1.module.css';

export default function Page1() {
  console.log('Page 1 rendered');
  return <h1 className={styles.h1}>Page 1</h1>; 
};