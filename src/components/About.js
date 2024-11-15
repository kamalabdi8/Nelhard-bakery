import React from 'react';
import styles from '../index.css'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.textSection}>
                <h1>About Us</h1>
                <p>
                    "Welcome to <strong>FastFoodApp</strong>, your go-to destination for discovering delicious recipes 
                    from around the world. Designed to bring flavor and joy to your kitchen with just a few clicks!"
                </p>
            </div>
        </div>
    );
};

export default About;