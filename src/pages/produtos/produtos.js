import { useEffect, useState} from "react";
import style from './produtos.module.css'
import AOS from 'aos'; //Importa o código JavaScript da biblioteca
import 'aos/dist/aos.css'; // importando uma biblioteca js que faz animações ao scrollar




import { Link } from "react-router-dom";

const Produtos = () => {
    document.title = "Produtos - Nutriz"
    useEffect(() => {
        AOS.init({ duration: 1000 }); // 1000ms = 1s
    }, []);  
    
    const [offset, setOffset] = useState(0);
    const [zoom, setZoom] = useState(1.1); // começa maior 
    
    // efeito do zoom inicial
    useEffect(() => {
        const timer = setTimeout(() => setZoom(1), 100); // anima para tamanho normal
        return () => clearTimeout(timer);
    }, []);

    
    return (
        <>
        <main>
            <section className={style["container-img-produtos"]}>
                <div className={style["container-primeira-imagem"]}>
                    <div>
                        <img className={style["img-leg-back"]} src="/arquivossite/img/p_s1_img.png" alt="imagem legumes" style={{
                            transform: `translateY(${offset}px) scale(${zoom})`,
                            transition: "transform 1.0s ease-out",
                        }}/>
                    </div>
                    
                    <div className={style["container-titulo-subtitulo"]} >
                        <h1 className={style["titulo"]} data-aos="fade-up">Alimentos Nutriz:</h1>
                        <p className={style["subtitulo"]} data-aos="fade-up">Segurança, Saúde e Sabor em cada mordida</p>                   
                    </div>

                    <div className={style["teste"]}>
                        <a href="#redirecionamento-institucional" className={style["teste-1"]}>Institucional</a>
                        <a href="#redirecionamento_atacado" className={style["teste-1"]}>Atacado</a>
                        <a href="#redirecionamento_varejo" className={style["teste-1"]}>Varejo</a>
                        <a href="#redirecionamento_bom_apetite" className={style["teste-1"]}>Bom apetite</a>
                        <p id="redirecionamento-institucional"></p>
                    </div>                   
                </div>
                
            </section>
            {/* SEGUNDA PARTE TELA PRODUTOS - ANCORAS */}
            
            <section className={style["tamanho-elem-produ"]}>
                <div>
                    <h1 className={style["titulo-lin-inst"]} data-aos="fade-up">Linha Institucional</h1>
                </div>
                
                <div className={style["produtos_prod_s2__xKQwy"]} >
                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/brocolis-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                            <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_Brocolis.26bbe9fb6f38e916b565.png"/>
                            <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Brócolis 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/brocolis-2kg" onClick={() => window.scrollTo(0, 0)}>
                            <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_brocolis_2kg.ee99c5ba7e4362d2de77.png"/>
                            <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Brócolis 2kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/couve-flor-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_Couveflor.b690bc1fcfd093175747.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Couve-flor 2,5kg</p>
                    </div>
                
                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/ervilha-fresca-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_ErvilhaFresca.b069458936ac17bd782e.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Ervilha Fresca 2,5kg</p>
                    </div>
                
                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/seleta-de-legumes-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_seletadelegumes.653cfef07afb3cf42201.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Seleta de legumes 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/jardineira-com-ervilhas-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_jardineiracomervilhas.80677bcf64251edd0bd3.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Jardineira com Ervilhas 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/jardineira-panache-2,5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_jardineirapanache.e2b91e3d97856e071bc6.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Jardineira Panachê 2,5kg</p>
                    </div>
                    
                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/jardineira-primavera-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_jardineiraprimavera.ae01de55781726d1c8f5.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Jardineira Primavera 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/polenta-palito-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_polentapalito.fa8de42d2b426f34b584.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Polenta Palito 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/polenta-noisette-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_PolentaNoisette.8eed8ef9c9d0b762afcd.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Polenta Noisette 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/vagem-inteira-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_VagemInteira.aec73f671d4dbb8cf6b3.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Vagem Inteira 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/vagem-pedacos-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_VagemPedaco.6365ad1d64d93de3c4be.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Vagem Pedaços 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/espinafre-picado-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_EspinafrePicado.7c6b5f58d15699b6adda.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Espinafre Picado 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/espinafre-folhas-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_EspinafreFolhas.684b3dc45bc8623cdc64.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Espinafre Folhas 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/cenoura-baby-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_CenouraBaby.692606884283ef53b4e7.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Cenoura Baby 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/cenoura-em-cubos-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_cenouracubos.75f2c31eeaa14cde8da6.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Cenoura em cubos 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/couve-de-bruxelas-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_CouveDeBruxelas.fcbdba541b566d70c812.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Couve-de-Bruxelas 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/mandioca-palitos-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_MandiocaPalitos.6c4577d05a2df3ef670a.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Mandioca Palitos 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/mandioca-pedacos-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_MandiocaPedaco.3bbc3183fc5f846f196b.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Mandioca Pedaços 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/abobora-cabotia-2-5kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_AbóboraCabotiá.62ab869f9bafe6bac465.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Abobóra Cabotiá 2,5kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/aneis-de-cebola-1-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_AnéisdeCebola.98b4a571a0e017af8c95.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Anéis de Cebola Leduc 1,1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/batata-palito-2kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_BatataPalito.7f58bb06aa6f5a03ff6d.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Batata Palito Temperada 2kg</p>
                    </div>


                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/couve-flor-branqueado-2kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/INST_CouveFlorMacerata.73feb774ecf07b8ade8a.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Couve-Flor Macerata 2kg</p>
                        <p id="redirecionamento_atacado"></p>
                    </div>
                </div>
            </section>
            
            <section className={style["tamanho-elem-produ"]}>
                <h1 className={style["titulo-lin-inst"]}  data-aos="fade-up">Linha Atacado</h1>

                <div className={style["produtos_prod_s2__xKQwy"]} >
                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/brocolis-atac-1-02kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_brocolis.0942e4da786ae1cec6a7.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Brócolis 1,02kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/couve-flor-atac-1-02kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_couve_flor.7b5c678a9befe20b1173.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Couve-flor 1,02kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/ervilha-fresca-atac-1-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_ervilha_fresca.8d3ef2a3a6f0c3a3d526.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Ervilha Fresca 1,1kg</p>
                    </div>
                
                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/milho-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_Milho.bb003a871ff5badcd468.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Milho Grãos 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/jardineira-com-ervilhas-atac-1-02kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_jardineira_com_ervilhas.ae1888b578733abbd6f8.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Jardineira com Ervilhas 1,02kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/jardineira-panache-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_JardineiraPanache.b323967238a1a2605105.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Jardineira Panachê 1kg</p>
                    </div>


                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/alho-inteiro-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_AlhoInteiro.3c74e8f1b6e2039efac9.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Alho Inteiro 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/alho-picado-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_AlhoPicado.e58671a6befd822d480c.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Alho Picado 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/polenta-palitos-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_polentaPalitos.bc00fd74c0baf2571862.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Polenta Palitos 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/mandioca-palito-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_MandiocaPalito.09f2e811b2d4e327d31e.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Mandioca Palitos 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/mandioca-pedaco-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_MandiocaPedaco.e4fc03d2ec5851fddd1f.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Mandioca Pedaços 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/pao-de-queijo-tradicional-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_PaoDeQueijoTradicional.605a1f747d59d6732725.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Pão de Queijo Tradicional 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/pao-de-queijo-coquetel-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_PaoDeQueijoCoquetel.1c091cfe3bdd3f2914b2.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Pão de Queijo Coquetel 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/pao-de-queijo-super-lanche-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_PaoDeQueijoSuperLanche.b3284f3c93f25ed541be.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Pão de Queijo Super Lanche 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/dueto-de-legumes-atac-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_DuetoDeLegumes.f7b473fb767fb264855d.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Dueto de Legumes 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/ervilha-congelada-atac-1kg\" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/ATAC_ervilhaCong.28f30c0d70b7d215627f.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Ervilha Congelada 1kg</p>
                        <p id="redirecionamento_varejo"></p>
                    </div>
                </div>
            </section>
            
            <section className={style["tamanho-elem-produ"]}>
                <h1 className={style["titulo-lin-inst"]} data-aos="fade-up">Linha Varejo</h1>

                <div className={style["produtos_prod_s2__xKQwy"]} >
                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/brocolis-var-300g" onClick={() => window.scrollTo(0, 0)} >
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/VAR_brocolis.06cda944bf060c3da88d.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Brócolis 300g</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/couve-flor-var-300g" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/VAR_couve_flor.779869204f712196a525.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Couve-flor 300g</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/ervilha-fresca-var-300g" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/VAR_ervilha_fresca.237fee2ca1f5e88fb16b.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Ervilha Fresca 300g</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/seleta-de-legumes-var-300g" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/VAR_seleta_de_legumes.4d8f79ee972335eaca06.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Seleta de Legumes 300g</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/jardineira-panache-var-300g" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/VAR_jardineira_panache.f8150488edbf0967ef3b.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Jardineira Panachê 300g</p>
                    </div>
            
                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/polenta-palito-var400g" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/VAR_polenta_palitos.ce5097431a8ce7451888.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Polenta Palitos 400g</p>
                        <p id="redirecionamento_bom_apetite"></p>
                    </div>
                </div>
            </section>
            
            <section className={style["tamanho-elem-produ"]}>
                <h1 className={style["titulo-lin-inst"]} data-aos="fade-up">Linha Bom Apetite</h1>

                <div className={style["produtos_prod_s2__xKQwy"]} >
                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/brocolis-bom-apetite-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/BA_Brocolis.530564937fb65d83f0a9.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Brócolis 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/couve-flor-bom-apetite-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/BA_CouveFlor.c701f27d91b57103c524.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Couve-flor 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/ervilha-bom-apetite-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/BA_Ervilha.172da77fb31fe75096bc.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Ervilha 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/jardineira-com-ervilhas-bom-apetite-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/BA_JardineiraErvilha.ea7107398ce56e7ed5eb.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Jardineira com Ervilhas 1kg</p>
                    </div>

                    <div className={style["produtos_container_produtos__TiIOI"]}>
                        <Link to="/produto/jardineira-panache-bom-apetite-1kg" onClick={() => window.scrollTo(0, 0)}>
                        <img className={style["tmh-img-produ"]} src="/arquivossite/img/produtos/BA_JardineiraPanache.3d7a2c6c0ab6aca46d07.png"/>
                        <p className={style["produtos_leia_mais__8G2Lk"]}>LEIA MAIS</p>
                        </Link>
                        <p>Jardineira Panachê 1kg</p>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
};

export default Produtos;