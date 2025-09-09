import styles from "./garantia.module.css";
import { SlEnergy } from "react-icons/sl";
import { LuShield } from "react-icons/lu";
import { RiStarSLine } from "react-icons/ri";

export default async function Garantia() {
  return (
    <section className={styles.section_garantia}>
      <div className={styles.garantia_content}>
        <div className={styles.garantia_item}>
          <LuShield
            style={{
              width: "2.5rem",
              height: "2.5rem",
              color: "#059669",
            }}
          />
          <div>
            <h4>Garantia de 2 Anos</h4>
            <p>Qualidade Philips garantida</p>
          </div>
        </div>
        <div className={styles.garantia_item}>
          <SlEnergy
            style={{
              width: "2.5rem",
              height: "2.5rem",
              color: "#059669",
            }}
          />
          <div>
            <h4>Entrega Rápida</h4>
            <p>Receba em até 3 dias úteis</p>
          </div>
        </div>
        <div className={styles.garantia_item}>
          <RiStarSLine
            style={{
              width: "2.5rem",
              height: "2.5rem",
              color: "#059669",
            }}
          />
          <div>
            <h4>Garantia de 2 Anos</h4>
            <p>Qualidade Philips garantida</p>
          </div>
        </div>
      </div>
    </section>
  );
}
