import React from "react";
import styles from "./Contact.module.css";
export default function Contact() {

  return (
    <div className={styles.contactCard}>
        <div className={styles.form__img}></div>
      <div className={styles.contactText}>
        Subscribe to get information, latest news and other interesting offers
        about cobham
      </div>
      <div className={styles.contactButton}>
        <div className={styles.contactButton__text}>Subscribe</div>
      </div>
      <input type='text' className={styles.contact__form} placeholder="Your Email"></input>
    </div>
  );
}
