import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Header1 from "./components/header/Header1";
import Header1b from "./components/header/Header1b";
import Header2 from "./components/header/Header2";
import Main from "./components/main/Main";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Header1 />
      <Header1b />
      <Header2 />
      <div className={styles.content}>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </main>
  );
}
