import style from './home.module.css';
import AOS from 'aos'; //Importa o código JavaScript da biblioteca
import 'aos/dist/aos.css'; // importando uma biblioteca js que faz animações ao scrollar
import { useLocation } from 'react-router-dom';


import { useEffect, useRef } from 'react';

const Home = () => {
    const { hash } = useLocation(); 

    const pathRef = useRef(null); 
    document.title = "Nutriz Alimentos Congelados"
    useEffect(() => {
    AOS.init({ duration: 1000 }); // 1000ms = 1s
    }, []);


    useEffect(() => {
    if (hash) {
        const section = document.querySelector(hash);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    }, [hash]);

    return (
        // primeira parte tela home
        <><div className={style["primeiro-container"]}>
            <video
                className={style["video-bg"]}
                src="/arquivossite/video.webm"
                autoPlay
                loop
                muted
                playsInline />
            <div className={style["home-text"]}>
                <div>
                    <h1>
                        O 
                        <span className={`${style["scribble-wrapper"]} ${style["pill"]}`}>
                            <svg
                            className={style["scribble-svg"]}
                            viewBox="0 0 1200 400"
                            preserveAspectRatio="none"
                            >
                            {/* Linha de cima */}
                            <path
                                d="M50,200 C100,1 1000,50 1150,200"
                                stroke="#df231d"
                                strokeWidth="25"
                                fill="none"
                                strokeLinecap="round"
                            />

                            {/* Linha de baixo (espelhada) */}
                            <path
                                d="M1150,200 C1000,450 0,350 50,200"
                                stroke="#df231d"
                                strokeWidth="25"
                                fill="none"
                                strokeLinecap="round"
                            />
                            </svg>
                            frescor
                        </span> 
                        que você deseja, a praticidade que você precisa.
                    </h1>
                </div>
                <div className={style["subtitulo-responsividade"]}>
                    <p>Alimentos congelados saborosos, práticos e de qualidade. Delicie-se!</p>
                </div>
            </div>
                <a href="#redirecionamento-alimentos-congelados" className={style["botao-conheca"]}>CONHEÇA</a>
            </div>

        {/* segunda parte tela home */}
            <div className={style["pai-segundo-terceiro-container"]} id='redirecionamento-alimentos-congelados'>
                <div className={style["segundo-container"]}> 
                    <h3 className={style["titulo-container"]} data-aos="fade-up">Alimentos Congelados</h3>
                    <h3 className={style["titulo-container"]} data-aos="fade-up"> Nutriz: Sabor e frescor</h3>
                    <h3 className={style["titulo-container"]} data-aos="fade-up" >na sua mesa</h3>

                    <p className={style["texto-container"]}>Estamos presentes em todo o território brasileiro, adotando uma abordagem inovadora e utilizando equipamentos modernos para garantir qualidade em todas as etapas da nossa produção, desde a escolha da semente até a entrega ao cliente.</p> 
                    <br></br>
                    <p className={style["texto-container"]}> Nossos produtos são ecologicamente corretos, mantendo as características nutricionais, sabor e textura dos alimentos.</p>
                    <br></br>
                    <p className={style["texto-container"]}>Somos referência no setor de congelados e nos destacamos pelo comprometimento e seriedade.</p>
                    <br></br>
                    <a href="/quemsomos" className={style["botao-saiba-mais"]}>SAIBA MAIS</a>
                </div>

                <div className={style["terceiro-container"]}>
                    <img className={style["imagem-brocolis"]} src='/arquivossite/img/imagem_brocolis_secao2.png' alt='imagem-brocolis' />
                </div>
            </div>

        {/* terceira parte tela home */}
            <div className={style["quarto-container"]}>
                <h4 className={style["texto-quarto-container"]}>Conheça os principais diferenciais dos alimentos Nutriz:</h4>
            </div>

        {/* QUARTA PARTE TELA HOME */}
            <div className={style["container-pai"]}>
                <div className={style["bloco-branco"]}>
                    <h3>Alimentos 100% naturais, livres de aditivos e conservantes</h3> <br/>
                    <p>Selecionados, limpos, descascados, cortados e congelados individualmente. Sem corantes ou conservantes, preservando a autenticidade e qualidade.</p>
                </div>

                <div className={style["bloco-verde"]}>
                    <h3>Praticidade e economia</h3> <br/>
                    <p>Sem a necessidade de descongelar antes do preparo e com a possibilidade de retornar o restante da embalagem ao freezer, evitando desperdícios!</p>
                </div>

                <div className={style["bloco-vermelho"]}>
                    <h3>Preparo rápido e com qualidade garantida</h3> <br/>
                    <p>Nossos alimentos oferecem um rápido preparo, garantindo qualidade nutricional e microbiológica.</p>
                </div>
            </div>
        {/* QUINTA PARTE TELA HOME */}
            <div className={style["pai-imagem"]}>
                <img
                    className={style["img-legumes"]}
                    src='/arquivossite/img/p_s1_img.png'
                    alt='imagem-legumes'
                />
                <h3 className={style["texto-legumes"]}>
                    Os <span className={style["destaque-vermelho"]}>
                        melhores
                        <svg
                        className={style["linha-vermelha"]}
                        viewBox="0 0 120 30"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M0 15h120"           /* linha reta horizontal */
                            stroke="#df0022"       /* cor vermelha */
                            strokeWidth="20"        /* grossura */
                            strokeLinecap="round"  /* pontas arredondadas */
                            fill="none"
                        />
                        </svg>
                    </span>{" "}
                    alimentos congelados!
                    </h3>
            </div>
        {/* SEXTA PARTE TELA HOME */}
            <div className={style["container-linha"]} >
                
                <div className={style["container-bloco-linha"]} data-aos="fade-left" data-aos-duration="800">
                    <a href="/produtos" className={style["categoria-linha"]}>
                        <div className={style["imagem-wrapper"]} >
                            <img className={style["imagem-pessoa"]}src='/arquivossite/img/banner_s5_1_certo.png' alt='mulher com colher'/>
                        </div>
                        <p className={style["nome-linha"]}>Linha</p>
                        <span className={style["texto-linha"]}>Institucional</span>
                    </a>
                </div>
                <div className={style["container-bloco-linha"]} data-aos="fade-left" data-aos-duration="1200">
                    <a href="/produtos" className={style["categoria-linha"]}>
                        <div className={style["imagem-wrapper"]}>
                            <img className={style["imagem-pessoa"]} src='/arquivossite/img/banner_s5_2_certo.png' alt='senhora com produto'/>
                        </div>
                        <p className={style["nome-linha"]}>Linha</p>
                        <span className={style["texto-linha"]}>Atacado</span>
                    </a>
                </div>
                <div className={style["container-bloco-linha"]} data-aos="fade-left" data-aos-duration="1600">
                    <a href="/produtos" className={style["categoria-linha"]}>
                        <div className={style["imagem-wrapper"]}>
                            <img className={style["imagem-pessoa"]} src='/arquivossite/img/banner_s5_3_certo.png' alt='casal com produto'/>
                        </div>
                        <p className={style["nome-linha"]}>Linha</p>
                        <span className={style["texto-linha"]}>Varejo</span>
                    </a>
                </div>
                <div className={style["container-bloco-linha"]} data-aos="fade-left" data-aos-duration="2000">
                    <a href="/produtos" className={style["categoria-linha"]}>
                        <div className={style["imagem-wrapper"]}>
                            <img className={style["imagem-pessoa"]} src='/arquivossite/img/banner_s5_4_certo.png' alt='mãe e filha com produto'/>
                        </div>
                        <p className={style["nome-linha"]}>Linha</p>
                        <span className={style["texto-linha"]}>Bom Apetite</span>
                        <p id='redirecionamento-receitas-footer'></p>
                    </a>
                </div>
            </div>

            <p id='redirecionamento-tela-receitas'></p>
        
        {/* SÉTIMA PARTE TELA HOME */}
            <div className={style["inspire"]} data-aos="fade-up" data-aos-duration="5000">
                <h3 className={style["inspire-conteudo"]}>
                    Inspire-se com<br />
                    <span className={style["texto-destaque"]}>
                    receitas deliciosas
                    <svg
                        className={style["linha-verde"]}
                        viewBox="0 0 500 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M0,100 C10,100 100,70 480,90"
                        stroke="#007943"
                        strokeWidth="6"
                        fill="transparent"
                        strokeLinecap="round"
                        />
                    </svg>
                    </span>
                    &nbsp;para preparar com os seus alimentos Nutriz!
                </h3>

                <div className={style["div-ancora-confira"]}>
                    <a href="https://www.instagram.com/stories/highlights/18240165124258007" className={style["ancora-confira"]}>CONFIRA!</a>
                </div>

                
            </div>
        {/* ULTIMA PARTE TELA HOME */}
            
        </>
    );
};

export default Home;