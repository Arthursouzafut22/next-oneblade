import Button from "../button/Button";
import styles from "./principal.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default async function WrapperPrincipal() {
  return (
    <main className={styles.container}>
      <div className={styles.box1}>
        <h1>OneBlade Philips</h1>
        <p className={styles.revolucao}>A revolução no cuidado masculino</p>
        <p className={styles.description}>
          Experimente a precisão e versatilidade do OneBlade Philips. Corte,
          apare e defina contornos com uma única ferramenta de alta qualidade.
        </p>
        <div className={styles.wrapperButtons}>
          <Button fontSize={"1.1rem"}>Comprar OneBlade</Button>
          <Button fontSize={"1.1rem"} variante={"secundary"}>
            Ver Especificações
          </Button>
        </div>
        <div className={styles.boxAvaliation}>
          <div className={styles.stars}>
            {new Array(5).fill(5).map((_, i) => (
              <FaStar key={i} color={"#FBBF24"} fontSize={20} />
            ))}
          </div>
          <p>4.8/5 (2.847 avaliações)</p>
        </div>
      </div>

      <div className={styles.box2}>
        <Image
          src={"https://images.unsplash.com/photo-1646376235675-e74224635744"}
          alt="oneblade"
          width={4000}
          height={6000}
          quality={80}
        />
      </div>
    </main>
  );
}
