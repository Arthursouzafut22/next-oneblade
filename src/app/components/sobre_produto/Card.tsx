import { IconType } from "react-icons";
import styles from "./sobre.module.css";
import { ReactElement } from "react";

type CardProps = {
  icon: ReactElement<IconType>;
  title: string;
  description: string;
};

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.box_icon}>{icon}</div>
      <h2 className={styles.title_card}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
    </div>
  );
}
