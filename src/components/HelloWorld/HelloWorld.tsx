import React from 'react';
import styles from './HelloWorld.module.css';

const HelloWorld: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, World!</h1>
      <p className={styles.description}>
        This is a basic React application created with Create React App and TypeScript.
      </p>
    </div>
  );
};

export default HelloWorld;