import styles from "./page.module.css";
import WrapperPrincipal from "./components/sessao_principal/WrapperPrincipal";
import SobreProduto from "./components/sobre_produto/SobreProduto";

export default async function Home() {
  return (
    <main className={styles.page}>
      <WrapperPrincipal />
      <SobreProduto/>
    </main>
  );
}
