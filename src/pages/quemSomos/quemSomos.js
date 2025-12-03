import { useEffect, useState } from "react";
import style from './quemSomos.module.css';

const QuemSomos = () => {
    const [offset, setOffset] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [zoom, setZoom] = useState(1.1); // começa maior 

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 912);//criei isMobile para trocar a img no html
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 912);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // efeito do scroll
    useEffect(() => {
        if (isMobile) return; // <-- trava o efeito no mobile

        document.title = "Institucional - Nutriz"
        const handleScroll = () => {
            const deltaY = window.scrollY - lastScrollY; 
            setOffset(prev => prev - deltaY * 0.08); // move em sentido oposto
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // efeito do zoom inicial
    useEffect(() => {
        const timer = setTimeout(() => setZoom(1), 100); // anima para tamanho normal
        return () => clearTimeout(timer);
    }, []);

    return (
        // primeira parte tela quam somos
        <><section className={style["primeira-secao-quem-somos"]} id="redirecionamento-img-quem-somos">
            <div>
                <img
                    className={`${style["primeira-imagem-quem-somos"]} ${style["img-frescor"]}`}
                    src={
                        isMobile
                            ? "/arquivossite/img/backgroundQuemSomos_mobile.png"
                            : "/arquivossite/img/backgroundQuemSomos.png"
                    }
                    style={{
                        transform: isMobile
                        ? `scale(${zoom})` //se for mobile só zoom 
                        : `translateY(${offset}px) scale(${zoom})`, // se não os dois
                        transition: "transform 1.0s ease-out",
                    }}
                />
            </div>
        </section>
        {/* segunda parte tela quem somos  */}
        <section className={style["segunda-secao-quem-somos"]}>
            <div className={style["primeiro-container"]}>
                <div className={style["texto-escolha-consciente"]}>
                    <p className={style["texto-maior"]}>Uma<span className={style["escolha-span"]}> escolha consciente</span> para quem valoriza qualidade e saúde</p>

                    <p className={style["texto-menor"]}>Na Nutriz, acreditamos que comer bem pode (e deve) ser prático, saboroso e sustentável. Desde 2003, nossa missão é entregar alimentos congelados de alta qualidade, preservando o sabor, a textura e os nutrientes dos vegetais com o máximo de respeito à natureza e às pessoas.</p>

                    <p className={style["texto-menor"]}>Garantimos a excelência dos nossos produtos ao longo de todo o ano, desde a escolha das sementes até a entrega final. Nosso processo é marcado por controle rigoroso de resíduos, mão de obra qualificada e responsabilidade socioambiental em cada etapa.</p>

                    <p className={style["texto-menor"]}>Com uma linha completa de alimentos ultracongelados, livres de conservantes e embalados em materiais 100% recicláveis, oferecemos mais praticidade para o dia a dia e mais saúde para quem consome nossos produtos.</p>
                </div>

                <div className={style["pai-imagem-quem-somos"]}>
                    <img
                        className={`${style["primeira-imagem-quem-somos"]} ${style["img-semente"]}`}
                        src={
                            isMobile
                                ? "/arquivossite/img/qs_s2_img_mobile.png"
                                : "/arquivossite/img/qs_s2_img2.png"
                        }
                        style={{
                        transform: isMobile ? "none" : `translateY(${offset}px)`,
                        transition: isMobile ? "none" : "transform 0.1s linear",
                        }}
                    />
                </div>
            </div>
        </section>
        {/* terceira parte tela quem somos  */}
        <section className={style["terceira-secao-quem-somos"]}>
            <div className={style["segundo-container"]}>
                <div className={style["tamanho-elemento-img-broc"]}>
                    <img
                        className={style["imagem-brocolis-prato"]}
                        src="/arquivossite/img/qs_s3_img.png"
                        alt="imagem brocôlis no prato"
                        style={{
                        transform: `translateY(${offset}px)`,
                        transition: "transform 0.1s linear",
                        }}
                    />                    
                </div>
                <div className={style["teste"]}>
                    <p className={`${style["texto-maior"]} ${style["texto-trajetoria"]}`}> Uma trajetória de crescimento com 
                    <span className={style["escolha-span"]}> inovação e propósito
                    </span></p>

                    <p className={style["texto-menor-branco"]}>Desde a fundação, a Nutriz vem crescendo com consistência, sempre investindo em inovação.</p>

                    <p className={style["texto-menor-branco"]}>Em 2008, inauguramos nossa própria câmara frigorífica, o que aprimorou a logística e fortaleceu a confiança dos nossos parceiros.</p>

                    <p className={style["texto-menor-branco"]}>Em 2011, lançamos nossa linha de produtos para atacado e, no ano seguinte, modernizamos toda a identidade visual das embalagens. Também criamos as marcas Bom Apetite e Macerata, que ampliam nossa atuação comercial e nos ajudam a chegar a diferentes regiões do Brasil.</p>

                    <p className={style["texto-menor-branco"]}>Cada passo foi pensado para evoluir junto com nossos clientes, mantendo a qualidade e a variedade que são marcas registradas da Nutriz.</p>
                </div>
            </div>
            <div className={style["controle-imagem-valores"]}>
                <img className={style["imagem-valores"]} 
                src={
                    isMobile
                        ? "/arquivossite/img/valores_mobile.png"
                        : "/arquivossite/img/valores.png"
                }
                />
            </div>
            <div>
                <h1 className={style["texto-politica"]}>Política Integrada</h1>
            </div>
            <div>
                <p className={style["texto-quarta-parte"]}>
                    A Nutriz Indústria e Comércio de Alimentos Ltda. compromete-se a melhorar continuamente os processos de gestão da qualidade, segurança dos alimentos e gestão ambiental, com foco na proteção do meio ambiente e na prevenção da poluição, envolvendo e desenvolvendo seus colaboradores de forma ativa. Além disso, promove ações sociais que contribuem para o bem-estar das comunidades locais, apoiando iniciativas nos domínios da educação e da sustentabilidade. Por meio de seus diversos canais de comunicação, a empresa assegura uma boa relação com as partes interessadas, pautada na transparência e no diálogo constante. A Nutriz procura manter a eficácia e a eficiência dos processos produtivos, com o objetivo de superar as expectativas dos consumidores e cumprir os requisitos legais, dos clientes e ambientais, maximizando o valor da empresa e reforçando seu compromisso social.
                </p>
            </div>
        </section>
        {/* SEXTA SEÇÃO TELA QUEM SOMOS */}
        <section className={style["container-pai-imagem-verde"]}>
            <div className={style["container-imagem-verde"]}>
                <img className={style["imagem-verde"]} 
                src={
                    isMobile
                        ?"/arquivossite/img/qs_s6_mobile.png"
                        : "/arquivossite/img/qs_s6.png"
                }
                /> 
            </div>
            <div className={style["pai-textos-verde"]}>
                <p className={style["texto-maior-verde"]}>Compromisso com qualidade e impacto positivo</p>

                <p className={style["texto-menor-verde"]}>A satisfação dos nossos clientes começa com a escolha de insumos naturais e termina com a entrega de um produto saudável, seguro e saboroso. Atuamos com responsabilidade em toda a cadeia produtiva, conectando o campo à mesa com respeito ao meio ambiente e contribuição ao desenvolvimento social e econômico do país.</p>        
            </div>
        </section>
        </>
    )
}

export default QuemSomos;