import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.main}>
      <div className={styles.left}>
        <div className={styles.innerLeft}>
          <div style={{ display: "flex", marginLeft: "150px", gap: "35px" }}>
            <div className={styles.liGap} >
              <div className={styles.points}></div>
              <li>Rezept einlosen</li>
            </div>
            <div className={styles.liGap}>
              <div className={styles.points}></div>
              <li>Live Bestand</li>
            </div>
          </div>
        </div>
        <div className={styles.innerLeft}>
          <div style={{marginTop:"45px"}} className={styles.leftLi}>
            <li>AGB</li>
            <li>Impressum</li>
            <li>Datenschutz</li>
          </div>
          <div style={{ display: "flex", marginLeft: "67px", gap: "30px" }}>
            <div className={styles.liGap}>
              <div className={styles.points}></div> <li>Videosprechstunde</li>
            </div>
            <div className={styles.liGap}>
              {" "}
              <div className={styles.points}></div> <li>FAQs</li>
            </div>
            <div className={styles.liGap}>
              {" "}
              <div className={styles.points}></div> <li>Kontakt</li>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.innerRight}>
          <li>Standort</li>
          <div>
            BergstraBe 49-57 69469 Weinheim
            <div>(3 Glocken Quartier)</div>
          </div>
        </div>
        <div className={styles.innerRight}>
          <li>Telefon</li>
          <div>0223 545 5250</div>
        </div>
        <div className={styles.innerRight}>
          <li>Offnungszeiten</li>
          <div>
            <li>Mo-Fr</li>
            <div>09:00 - 18:00 Uhr</div>
            <li>Sa</li>
            <div>09:00 - 14:00 Uhr</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
