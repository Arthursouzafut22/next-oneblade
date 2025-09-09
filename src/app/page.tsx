import styles from "./page.module.css";
import WrapperPrincipal from "./components/sessao_principal/WrapperPrincipal";
import SobreProduto from "./components/sobre_produto/SobreProduto";
import Garantia from "./components/garantia/Garantia";

export default async function Home() {
  return (
    <div className={styles.page}>
      <WrapperPrincipal />
      <SobreProduto />
      <Garantia />
    </div>
  );
}
