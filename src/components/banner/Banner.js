import React from 'react';
import styles from './Banner.module.css';
import Heading from '../../images/Heading.png';
export default function Banner() {
  return <div className={styles.banner}>
        <div className={styles.before__heading}>
            BEST DESTINATIONS AROUND THE WORLD
      </div>
     <img src={Heading} alt="heading" className={styles.main__heading}></img>
      <div className={styles.after__heading}>
      Built Wicket longer admire do barton vanity itself do in it. 
      Preferred to sportsmen it engrossed listening. Park gate sell 
      they west hard for the.
      </div>
      <div className={styles.login}>
          <div className={styles.button}>Find out more</div>
        </div>
  </div>;
}
