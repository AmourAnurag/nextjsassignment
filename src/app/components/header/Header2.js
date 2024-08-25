import styles from "./header2.module.css";
import { points } from "../footer/footer.module.css";
import Image from "next/image";
const Header2 = () => {
  return (
    <div>
      <div className={styles.bluten}>
        <div className={points}></div>
        Blüten
      </div>

      <div className={styles.second}>
        <div className={styles.divInput}>
          <label>Suchen</label>
          <Image
              src="/images/Vector.png" // Path relative to the public directory
              alt="Description of the image"
              width={25}
              height={28}
            />
        </div>
        <div className={styles.elemeny}>Sortieren nach</div>
        <div className={styles.elemeny}>Verfügbarkeit<span></span></div>
        <div className={styles.elemeny} style={{ fontSize: "35px", width: "48px" }}>
        <Image
              src="/images/Group.png" // Path relative to the public directory
              alt="Description of the image"
              width={25}
              height={28}
            />
        </div>
      </div>
    </div>
  );
};

export default Header2;
