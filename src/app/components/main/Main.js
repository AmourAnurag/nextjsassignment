import Box from "./Box";
import style from "./main.module.css";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Box head="nicht lieferbar" color="red" />
        <Box head="nicht lieferbar" color="red" />
        <Box head="nicht lieferbar" color="red" />
      </div>
      <div className={style.container1}>
        <Box head="sofort lieferbar" color="#0D7052" />
        <Box head="sofort lieferbar" color="#0D7052" />
        <Box head="sofort lieferbar" color="#0D7052" />
      </div>
      <div className={style.container2}>
        <Box head="nicht lieferbar" color="red" />
        <Box head="nicht lieferbar" color="red" />
        <Box head="nicht lieferbar" color="red" />
      </div>
      <div className={style.numbers}>
        <div>←</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>...</div>
        <div>12</div>
        <div>→</div>
      </div>
    </div>
  );
};

export default Main;
