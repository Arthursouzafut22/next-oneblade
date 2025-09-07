"use client";

import styles from "./header.module.css";
import Button from "../button/Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.box}>
          <strong>OneBlade</strong>
          <p>Philips</p>
        </div>
        <Button fontSize={"0.875rem"} onClick={() => router.push("/endereco")}>
          Comprar Agora
        </Button>
      </nav>
    </header>
  );
}
