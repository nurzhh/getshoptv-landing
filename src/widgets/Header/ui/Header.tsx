import Link from "next/link";
import { Navbar } from "@/entities/Navbar";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={"container flex items-center justify-between"}>
        <Link href={"/"} className={styles.logo}>
          LOGO
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
