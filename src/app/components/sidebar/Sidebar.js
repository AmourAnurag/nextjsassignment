import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.filter}>Filter</div>
      <div className={styles.preis}>
        <h4 className={styles.head}>Preis</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div className={styles.container}>
            <div className={styles.rod}>
              <div className={styles.left}></div>
              <div className={styles.middle}></div>
              <div className={styles.right}></div>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.priceInner}>5€</div>
            <div> - </div>
            <div className={styles.priceInner}>10€</div>
          </div>
        </div>
      </div>
      <div className={styles.hersteller}>
        <h4 className={styles.head}>Hersteller</h4>
        <div className={styles.hestOption}>
          <label>
            <input type="checkbox" /> ADREXpharma
          </label>
          <label>
            <input type="checkbox" /> Aurora
          </label>
          <label>
            <span>✔</span> Avaay
          </label>
          <label>
            <span>✔</span> Bedrocan
          </label>
          <label>
            <input type="checkbox" /> Cannamedical
          </label>
        </div>
        <div className={styles.mehr}>mehr anzeigen</div>
      </div>
      <div className={styles.thc}>
        <h4 className={styles.head}>THC Gehalt</h4>
        <div className={styles.container}>
          <div className={styles.rod}>
            <div className={styles.left}></div>
            <div className={styles.middle}></div>
            <div className={styles.right}></div>
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.priceInner}>11%</div>
          <div> - </div>
          <div className={styles.priceInner}>18%</div>
        </div>
      </div>

      <div className={styles.cbd}>
        <h4 className={styles.head}>CBD Gehalt</h4>
        <div className={styles.container}>
          <div className={styles.rod}>
            <div className={styles.left}></div>
            <div className={styles.middle}></div>
            <div className={styles.right}></div>
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.priceInner}>1%</div>
          <div> - </div>
          <div className={styles.priceInner}>5%</div>
        </div>
      </div>
      <div className={styles.genetik}>
        <h4 className={styles.head}>Genetik</h4>
        <div className={styles.genetikInner}>
          <div className={styles.GFirst}>Indica</div>
          <div className={styles.Gsecond}>Sativa</div>
          <div className={styles.Gsecond}>Hybrid</div>
        </div>
      </div>
      <div className={styles.best}>
        <h4 className={styles.head}>Bestrahlung</h4>
        <div className={styles.genetikInner}>
          <div className={styles.GFirst} style={{ width: "106px" }}>
            bestrahlt
          </div>

          <div className={styles.Gsecond} style={{ width: "140px" }}>
            nicht bestrahlt
          </div>
        </div>
      </div>
      <div className={styles.terepene}>
        <h4 className={styles.head}>Terpene</h4>
        <span>⌄</span>
      </div>
      <div className={styles.alle}>
      <span>x </span> alle Filter zurucksetzen
      </div>
    </div>
  );
};

export default Sidebar;
