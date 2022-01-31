import React from 'react';
import styles from './Category.module.css';
export default function Cards(props) {
  return <div>
      <div className={styles.container}>
  <div className={styles.card}>
    <div className={styles.imgBx}>
      <img className={styles.image} src={props.img} alt=""/>
    </div>
    <div className={styles.contentBx}>
      <h2>Best flights</h2>
      <a href="#s">Buy Now</a>
    </div>
  </div>
</div>
  </div>;
}
