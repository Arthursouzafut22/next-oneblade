"use client";

import styles from "./header.module.css";
import Button from "../button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.box}>
          <strong>OneBlade</strong>
          <p>Philips</p>
        </div>
        <Button
          fontSize={"0.875rem"}
          onClick={() => alert("Ainda não esta 100% pronto")}
        >
          Comprar Agora
        </Button>
      </nav>
    </header>
  );
}
