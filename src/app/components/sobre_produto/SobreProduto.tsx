import styles from "./sobre.module.css";

export default async function SobreProduto() {
  return (
    <section className={styles.sobre}>
      <div className={styles.badge}>Produto</div>
      <h2 className={styles.title}>Por que escolher o OneBlade?</h2>
      <p className={styles.descriptionSobre}>
        Descubra as características que fazem do OneBlade a escolha perfeita
        para o homem moderno que valoriza praticidade e qualidade.
      </p>
    </section>
  );
}
