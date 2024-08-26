import styles from "./box.module.css";
import Image from "next/image"; // Correctly import Image from next/image

const Box = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <div className={styles.rect}>
          <li style={{ color: props.color }}>{props.head}</li>
        </div>
        {props.head2 !== " " && (
          <div className={styles.rect} style={{ width: "50px",padding:"0px" }}>
            {props.head2}
          </div>
        )}
      </div>
      <div className={styles.image}>
        <Image
          src="/images/image.png" // Path relative to the public directory
          alt="Description of the image"
          width={150}
          height={140}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.frstContent}>
          <div className={styles.canify}>Canify</div>
          <div className={styles.frstContent1}>
            <div
              className={styles.frstContentA}
              style={{ backgroundColor: "white" }}
            >
              THC 18%
            </div>
            <div
              className={styles.frstContentA}
              style={{ backgroundColor: "#62C3C6", color: "white" }}
            >
              CBD &lt; 1%
            </div>
            <Image
              src="/images/Bestrahlt.png" // Path relative to the public directory
              alt="Description of the image"
              width={25}
              height={28}
            />
          </div>
        </div>
        <div className={styles.secondContent}>{props.head1}</div>
        <div className={styles.thirdContent}>
          <div className={styles.innerthrd}>
            <div>Kultivar</div>
            <div>{props.fruit}</div>
          </div>
          <div className={styles.innerthrd}>
            <div>Genetik</div>
            <div>Hybrid</div>
          </div>
        </div>
        <div className={styles.underPrice}>
          <div className={styles.bottom}>
            <div>
              <span>€<span className={styles.sp}>11,66</span><sup>1</sup></span>
            </div>
            <div>pro Gramm</div>
          </div>
          <div className={styles.underPrice2}>in den Warenkorb</div>
        </div>
      </div>
    </div>
  );
};

export default Box;
