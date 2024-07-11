import React from 'react';
import styles from './Loader.module.scss'
import {logo} from "../resource/resource";

const Loader = () => {
    return (
        <div className={styles.loading_spinner}>
            <div className={styles.spinner}></div>
            <img className={styles.logo} src={logo} alt="" />
        </div>
    );
}

export default Loader;