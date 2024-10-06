import { Header } from "@/widgets/Header";
import styles from "./styles.module.scss";

export default function MainPage() {
  return (
    <>
      <article className={styles.page}>
        <Header />
      </article>
    </>
  );
}
