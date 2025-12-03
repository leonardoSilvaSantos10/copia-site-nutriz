import { NavLink, Link, useLocation } from "react-router-dom";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const [idiomaAtivo, setIdiomaAtivo] = useState("br"); // idioma padrão ativo

  const { pathname, hash } = useLocation();

  const isHomeActive =
    pathname === "/home" ||
    pathname === "/" ||
    hash === "#redirecionamento-tela-receitas";

  const handleIdiomaClick = (idioma) => {
    setIdiomaAtivo(idioma);
  };

  //criei essa função para fazer voltar para o inicio da page
  const irInicio = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth"});
  }

  //criei essa função que determina se o link esta ativo ou não
  const estiloLink = ({ isActive }) =>
    isActive ? "menu-mobile-link active" : "menu-mobile-link";

  return (
    <header className="cabecalho">
      <div className="pai">
        <div className="pai-img">
          <img
            className="logo_nutriz"
            src="/arquivossite/img/logo.png"
            alt="Logo da nutriz"
          />
        </div>

        {!menuOpen && (
          <button className="btn-menu" onClick={() => setMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#007943"
              viewBox="0 0 16 16"
            >
              <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
        )}

        <div className="grupo-botoes">
          <NavLink
            to="/"
            className={isHomeActive ? "botao_tela active" : "botao_tela"}
            onClick={irInicio} 
          >
            Home
          </NavLink>

          <NavLink
            to="/quemsomos"
            className={({ isActive }) =>
              isActive ? "botao_tela active" : "botao_tela"
            }
            onClick={irInicio}
          >
            Quem somos
          </NavLink>

          <NavLink
            to="/certificacoes"
            className={({ isActive }) =>
              isActive ? "botao_tela active" : "botao_tela"
            }
            onClick={irInicio}
          >
            Certificações
          </NavLink>

          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive ? "botao_tela active" : "botao_tela"
            }
            onClick={irInicio}
          >
            Produtos
          </NavLink>

          <Link to="/#redirecionamento-tela-receitas" className="botao_tela">
            Receitas
          </Link>

          <NavLink
            to="/trabalheconosco"
            className={({ isActive }) =>
              isActive ? "botao_tela active" : "botao_tela"
            }
            onClick={irInicio}
          >
            Trabalhe conosco
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) =>
              isActive
                ? "botao_tela botao_contato active"
                : "botao_tela botao_contato"
            }
            onClick={irInicio}
          >
            Contato
          </NavLink>
        </div>

        <div className="grupo-icones">
          <a
            href="https://www.instagram.com/nutrizalimentos/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icones"
              src="/arquivossite/img/instagram.png"
              alt="Instagram Nutriz"
            />
          </a>

          <a
            href="https://www.facebook.com/nutrizalimentos"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icones"
              src="/arquivossite/img/facebook.png"
              alt="Facebook Nutriz"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/nutriz-industria-ltda/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icones"
              src="/arquivossite/img/linkedin.png"
              alt="Linkedin Nutriz"
            />
          </a>

          {/* Idiomas */}
          <button
            className={`idioma-link ${idiomaAtivo === "br" ? "active" : ""}`}
            onClick={() => handleIdiomaClick("br")}
          >
            <img
              className="icones icones-linguagem"
              src="/arquivossite/img/br.png"
              alt="Idioma em português"
            />
          </button>
          {/* <button
            className={`idioma-link ${idiomaAtivo === "us" ? "active" : ""}`}
            onClick={() => handleIdiomaClick("us")}
          >
            <img
              className="icones icones-linguagem"
              src="/arquivossite/img/us.png"
              alt="Idioma em inglês"
            />
          </button>
          <button
            className={`idioma-link ${idiomaAtivo === "es" ? "active" : ""}`}
            onClick={() => handleIdiomaClick("es")}
          >
            <img
              className="icones icones-linguagem"
              src="/arquivossite/img/es.png"
              alt="Idioma em espanhol"
            />
          </button> */}
        </div>
      </div>

      {/* MENU LATERAL MOBILE */}
      {menuOpen && (
        <>
          {/* Fundo escuro */}
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Menu lateral */}
            <button className="btn-fechar" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
          <div className={`menu-mobile ${menuOpen ? "aberto" : ""}`}>


            <nav className="menu-mobile-links">
              <NavLink
                to="/" className={estiloLink} onClick={irInicio}
              >
                Home
              </NavLink>
              <NavLink to="/quemsomos" className={estiloLink} onClick={irInicio}
              >
                Quem somos
              </NavLink>
              <NavLink to="/certificacoes" className={estiloLink} onClick={irInicio}>
                Certificações
              </NavLink>
              <NavLink to="/produtos" className={estiloLink} onClick={irInicio}>
                Produtos
              </NavLink>
              <Link
                to="/#redirecionamento-tela-receitas"
                onClick={() => setMenuOpen(false)}
              >
                Receitas
              </Link>
              <NavLink to="/trabalheconosco" className={estiloLink} onClick={irInicio}>
                Trabalhe conosco
              </NavLink>
              <NavLink to="/contato" className={estiloLink} onClick={irInicio}>
                Contato
              </NavLink>
            </nav>
            {/* Ícones dentro do menu mobile */}
            <div className="controle-duas-div-icones">
              <div className="menu-mobile-icones">
                <a
                  href="https://www.instagram.com/nutrizalimentos/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icones"
                    src="/arquivossite/img/instagram.png"
                    alt="Instagram"
                  />
                </a>
                <a
                  href="https://www.facebook.com/nutrizalimentos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icones"
                    src="/arquivossite/img/facebook.png"
                    alt="Facebook"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/nutriz-industria-ltda/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icones"
                    src="/arquivossite/img/linkedin.png"
                    alt="LinkedIn"
                  />
                </a>
              </div>
              {/* Idiomas dentro do menu mobile */}
              <div className="menu-mobile-idiomas">
                <button
                  className={`idioma-link ${
                    idiomaAtivo === "br" ? "active" : ""
                  }`}
                  onClick={() => handleIdiomaClick("br")}
                >
                  <img
                    className="icones icones-linguagem"
                    src="/arquivossite/img/br.png"
                    alt="Português"
                  />
                </button>

                {/* <button
                  className={`idioma-link ${
                    idiomaAtivo === "us" ? "active" : ""
                  }`}
                  onClick={() => handleIdiomaClick("us")}
                >
                  <img
                    className="icones icones-linguagem"
                    src="/arquivossite/img/us.png"
                    alt="Inglês"
                  />
                </button> */}

                {/* <button
                  className={`idioma-link ${
                    idiomaAtivo === "es" ? "active" : ""
                  }`}
                  onClick={() => handleIdiomaClick("es")}
                >
                  <img
                    className="icones icones-linguagem"
                    src="/arquivossite/img/es.png"
                    alt="Espanhol"
                  />
                </button> */}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
