'use client';

import Image from "next/image";
import styles from "./sobre.module.css";
import { SlEnergy } from "react-icons/sl";
import { LuShield } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import Card from "./Card";
import Button from "../button/Button";

export default function SobreProduto() {
  return (
    <section className={styles.sobre}>
      <div className={styles.badge}>Produto</div>
      <h2 className={styles.title}>Por que escolher o OneBlade?</h2>
      <p className={styles.descriptionSobre}>
        Descubra as características que fazem do OneBlade a escolha perfeita
        para o homem moderno que valoriza praticidade e qualidade.
      </p>

      {/* conteiner grid */}
      <div className={styles.wrapperGrid}>
        <div className={styles.wrapper_imagens}>
          <div className={styles.box_solid}>
            <Image
              alt="image"
              src={
                "https://images.unsplash.com/photo-1631255645312-90e87c3474b9"
              }
              width={5100}
              height={3400}
              quality={80}
            />
          </div>

          <div className={styles.box_imagens}>
            <Image
              alt="image"
              src={
                "http://images.unsplash.com/photo-1601612628452-9e99ced43524"
              }
              width={2674}
              height={2674}
              quality={80}
            />
            <Image
              alt="image"
              src={
                "https://images.pexels.com/photos/8385306/pexels-photo-8385306.jpeg"
              }
              width={2000}
              height={3000}
              quality={80}
            />
          </div>
        </div>

        <div className={styles.wrapper_info}>
          <h3>Tecnologia Inovadora</h3>
          <p className={styles.p_description}>
            O OneBlade combina a potência de um aparador com a suavidade de uma
            lâmina tradicional, oferecendo resultados profissionais no conforto
            da sua casa.
          </p>
          <div className={styles.box_card}>
            <Card
              icon={<SlEnergy fontSize={24} />}
              title={"Corte Preciso"}
              description={
                "Lâminas duplas que garantem um corte suave e preciso em qualquer comprimento"
              }
            />
            <Card
              icon={<LuShield fontSize={24} />}
              title={"Proteção da Pele"}
              description={
                "Sistema de proteção que previne irritações e cortes acidentais"
              }
            />
            <Card
              icon={<IoMdTime fontSize={24} />}
              title={"Rápido e Eficiente"}
              description={
                "Acabamento profissional em poucos minutos, ideal para o dia a dia"
              }
            />
          </div>

          <div className={styles.card_price}>
            <div className={styles.price_info}>
              <span className={styles.price_label}>Preço especial:</span>
              <span className={styles.price}>R$ 100,00</span>
              <span className={styles.price_old}>R$ 299,90</span>
            </div>
            <Button variante="green" fontSize="" onClick={()=>(1)}>
              Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
