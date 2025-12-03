import style from './footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={style["meu-footer"]}>
        <div className={style["imagens-footer"]}>
          <img
            className={style["logo-negativo"]}
            src="/arquivossite/img/Logo-negativo-white.png"
            alt="logo negativo Nutriz"
          />
          <img
            className={style["imagem-dnv"]}
            src="/arquivossite/img/DNV_FSSC-22000.png"
            alt="imagem sistema segurança"
          />
        </div>

        <div className={style["tabelas-footer"]}>
          <div className={style["tabela1"]}>
            <h4>Mapa do site</h4>
            <a className={style["ancoras-footer"]} href="/">Home</a>
            <a className={style["ancoras-footer"]} href="/quemsomos">Quem somos</a>
            <a className={style["ancoras-footer"]} href="/produtos">Produtos</a>
            <a className={style["ancoras-footer"]} href="/#redirecionamento-receitas-footer">Receitas</a>
          </div>
          <div className={style["tabela2"]}>
            <h4>Institucional</h4>
            <a className={style["ancoras-footer"]} href="/politica-de-privacidade">Política de privacidade</a>
            <a className={style["ancoras-footer"]} href="/trabalheconosco">Trabalhe conosco</a>
            <a className={style["ancoras-footer"]} href="/contato">SAC</a>
          </div>
        </div>
      </div>

      <div className={style["controle-copyright"]}>
        <p className={style["copyright"]}>© 2025 Nutriz</p>
      </div>
    </footer>
  );
};

export default Footer;