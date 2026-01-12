import styles from "../page.module.css";
import Impressum from "./Impressum";
import Header from "@/components/layout/Header/Header";
export default function page() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Impressum />
      </main>
    </div>
  );
}
