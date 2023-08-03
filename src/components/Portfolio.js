import React from "react";
import Project from "./Projects";
import styles from '../styles/Portfolio.module.css';

const projects = [
  {
    id: 0,
    title: "Project1",
    desc: "lorem501",
    lang: "test"
  },
  {
    id: 1,
    title: "Project2",
    desc: "lorem502",
    lang: "test2"
  },
];

export default function Portfolio() {
  console.log('Page portfolio rendered');
  return (
    <div className={styles.container}>
      <span className={styles.page_title}>My Portfolio</span>
      <Project projects={projects} />
    </div>
  );
};