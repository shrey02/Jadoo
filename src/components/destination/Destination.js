import React from 'react';
import styles from './Destination.module.css';
import MovingIcon from '@mui/icons-material/Moving';
export default function Destination(props) {
  return <div className={styles.destination__card}>
       <img src={props.image} alt=""></img>
       <div className={styles.destination__info}>
          <div className={styles.destination__city}>
               {props.city}
          </div>
          <div className={styles.destination__cost}>
               {props.cost}
          </div>
          <div className={styles.destination__days}>
         <MovingIcon fontSize="small"/> &nbsp; {props.days} Days Trip
          </div>
       </div>
       
  </div>;
}

