import React from "react";
import styles from "./header.module.css";
import { liGap, points } from "../footer/footer.module.css";
import Image from "next/image"; // If you want to use images instead of emojis

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.divInput}>
        <label>Suchen</label>
        <Image
              src="/images/Vector.png" // Path relative to the public directory
              alt="Description of the image"
              width={25}
              height={28}
            />
      </div>
      <div className={styles.divOthers}>
        <div className={liGap}>
          <div className={points}></div>
          <li>Rezept einlösen</li>
        </div>
        <div className={liGap}>
          <div className={styles.point}></div>
          <li>Live Bestand</li>
        </div>
        <div className={liGap}>
          <div className={styles.point}></div>
          <li>Videosprechstunde</li>
        </div>
        <div className={liGap}>
          <div className={styles.point}></div>
          <li>FAQs</li>
        </div>
        <div className={liGap}>
          <div className={styles.point}></div>
          <li>Kontakt</li>
        </div>
        <div className={styles.shop}>
          <div className={styles.shopIcon}>  <Image
              src="/images/l.png" // Path relative to the public directory
              alt="Description of the image"
              width={25}
              height={28}
            /></div>
          <div className={styles.ame}>Anmelden</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
