import styles from './footer.module.css';

export default async function Footer(){
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <h2>OneBlade Philips</h2>
          <p>A escolha inteligente para o cuidado masculino</p>
          <div className={styles.linha_bottom}>
            <div className={styles.bottom}></div>
          </div>
        </div>
        <span>© 2025 OneBlade Philips. Todos os direitos reservados.</span>
      </footer>
    );
}