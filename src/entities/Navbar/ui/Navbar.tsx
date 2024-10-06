import Link from "next/link";
import cn from "classnames";
import styles from "./styles.module.scss";

export default function Navbar() {
  const navs = [
    { name: "Преимущества", link: "/" },
    { name: "Как работаем", link: "/" },
  ];

  return (
    <nav className={cn("flex justify-center items-center", styles.nav)}>
      {navs.map((nav, index) => (
        <Link
          key={index}
          className={cn(styles.nav__link, "fill")}
          href={nav.link}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
}
