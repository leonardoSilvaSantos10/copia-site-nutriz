import { useEffect, useState } from "react";
import style from './certificacoes.module.css';
import AOS from 'aos'; //Importa o código JavaScript da biblioteca
import 'aos/dist/aos.css'; // importando uma biblioteca js que faz animações ao scrollar



const Certificacoes = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);//criei isMobile para trocar a img no html


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
    document.title = "Certificações - Nutriz"
    AOS.init({ duration: 1500 }); // 1000ms = 1s
    }, []);
    
    const [offset, setOffset] = useState(0);
    const [zoom, setZoom] = useState(1.1); // começa maior 

    // efeito do zoom inicial
    useEffect(() => {
        const timer = setTimeout(() => setZoom(1), 100); // anima para tamanho normal
        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            <section className={style['container-img']}>
                <div>
                    <img
                        className={style["img-legumes"]}
                        src={
                            isMobile
                                ? "/arquivossite/img/ctt_bg_s1_mobile.png"
                                : "/arquivossite/img/c_s1_img.png"
                        }
                        
                        style={{
                            transform: `translateY(${offset}px) scale(${zoom})`,
                            transition: "transform 1.0s ease-out",
                        }}
                    />
                </div>
                <div className={style['container-textos-1secao']}>
                    <h1 className={style['titulo']}  data-aos="fade-up">Certificações</h1>
                    <p className={style['subtitulo']}  data-aos="fade-up">Conheça nossa certificação de segurança, qualidade e compromisso com a excelência.</p>
                    <a href="#texto-redirecionado" class={style["certificacoes_svg_seta__branca"]}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path d="M16 23.333c-0.111 0-0.22-0.028-0.319-0.083l-14.667-8c-0.324-0.176-0.443-0.58-0.267-0.904 0.176-0.323 0.584-0.443 0.904-0.267l14.348 7.827 14.349-7.827c0.321-0.176 0.727-0.056 0.904 0.267 0.175 0.324 0.057 0.728-0.267 0.904l-14.667 8c-0.1 0.055-0.209 0.083-0.32 0.083zM16 18c-0.111 0-0.22-0.028-0.319-0.083l-14.667-8c-0.324-0.176-0.443-0.58-0.267-0.904 0.176-0.323 0.584-0.443 0.904-0.267l14.348 7.827 14.349-7.827c0.321-0.176 0.727-0.056 0.904 0.267 0.175 0.324 0.057 0.728-0.267 0.904l-14.667 8c-0.1 0.055-0.209 0.083-0.32 0.083z" fill="white"></path></svg></a>
                </div>
            </section>
            <section>
                <div className={style["container-elementos-2-parte"]}>
                    <div className={style["tamanho-elemento-textos-3"]}>
                        <div className={style["direcionamento-textos-grande-3"]}>
                            <p className={style["textos-3"]} id='texto-redirecionado'>A Nutriz carrega em seu nome o princípio do seu trabalho: Nutrir. Mas a nossa missão vai muito além da nutrição e, partindo dessa premissa, nos sentimos muito honrados em sermos uma empresa produtora de vegetais congelados certificada FSSC 22.000 (Food Safety System Certification 22000), esquema de certificação de reconhecimento internacional que demonstra o compromisso da Nutriz com a segurança e a qualidade dos alimentos, legalidade e melhoria contínua dos seus processos. O esquema de certificação FSSC 22.000 compreende os requisitos da ISO 22000, ISO/TS e requisitos adicionais desenvolvidos para garantir a segurança e a qualidade de alimentos, uma estrutura de alto nível de controle, o qual é reconhecido globalmente pelo GFSI (Global Food Safety Initiative), organização privada que atua no desenvolvimento de padrões de segurança e qualidade de alimentos, facilitando o controle e evitando duplicação de auditorias e certificações. Isso representa não só o reconhecimento pelo cuidado com os alimentos desde a escolha da semente até a mesa do consumidor, mas também é a garantia de qualidade e segurança de que todos os alimentos produzidos e comercializados pela Nutriz passam por rigorosos controles.</p>

                            <p className={style["textos-3"]} >Esse é o resultado de investimentos constantes em automação industrial, tecnologias de produção e nos mais avançados maquinários do mundo para garantir eficiência e qualidade aos vegetais produzidos. É o zelo ao produzir alimentos de forma segura e sustentável. É uma consequência do aprimoramento humano e de processos, do comprometimento e da dedicação que desde 2003 norteiam o trabalho da Nutriz no mercado de vegetais congelados no Brasil. Essa é a Nutriz: sinônimo de produção e comercialização de alimentos saudáveis, saborosos, práticos e, principalmente, de qualidade, fabricados com total segurança, alta tecnologia de produção e respeito ao meio ambiente!</p>
                        </div>
                    </div>
                    <div className={style["tamanho-elemento-imagem-2"]}>
                        <div className={style["direcionamento-imagem-2"]}>
                            <img className={style["imagem-segurança"]}  src='/arquivossite/img/22000_white.png' alt='logo-imagem' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Certificacoes;