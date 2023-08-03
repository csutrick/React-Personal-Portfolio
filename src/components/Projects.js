import React from "react";

import styles from '../styles/Portfolio.module.css';

export default function projects(props) {
    console.log('Page portfolio rendered');
    return (
        <div className={styles.container}>
            <div className={styles.container_project}>
                {props.projects.map((project) => (
                    <div className={styles.project_card}>
                        <span className={styles.project_title}>
                            {project.title}
                        </span>
                        <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                        alt="Profile"
                        className={styles.project_pic}
                        ></img>
                        <span className={styles.project_lang}>
                            Laungauges Used: {project.lang}
                        </span>
                    </div>
                ))};
            </div>
        </div>
    );
};