import style from './contato.module.css'
import { useEffect, useState, useRef } from "react";
import AOS from 'aos'; //Importa o código JavaScript da biblioteca
import 'aos/dist/aos.css'; // importando uma biblioteca js que faz animações ao scrollar

import emailjs from "@emailjs/browser";


const Contato = () => {
    document.title = "Contato - Nutriz"
    useEffect(() => {
    AOS.init({ duration: 1500 }); // 1000ms = 1s
    }, []);

    const [offset, setOffset] = useState(0);
    const [zoom, setZoom] = useState(1.1); // começa maior

    // efeito do zoom inicial
    useEffect(() => {
        const timer = setTimeout(() => setZoom(1), 100); // anima para tamanho normal
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.nome_contato.value;
        const email = e.target.email_contato.value;
        const work = e.target.empresa_contato.value;
        const about = e.target.assunto_contato.value;
        const message = e.target.msg_contato.value;


        emailjs.send(  
        "service_3wjoc8b",  
        "template_4yoar1e",  
        {
            name,
            email,
            work,
            about,
            message
        },
        "ME7Na1m1Fi9KHWBU7"
        )
        .then(() => {
        alert("Enviado com sucesso!");
        e.target.reset();
        })
        .catch(() => {
        alert("Erro ao enviar.");
        });
    };

    return (
        <main>
            <section className={style['container-img']}>
                <div>
                    <img
                        className={style["img-legumes"]}
                        src="/arquivossite/img/c_s1_img.png"
                        alt="imagem legumes"
                        style={{
                            transform: `translateY(${offset}px) scale(${zoom})`,
                            transition: "transform 1.0s ease-out",
                        }}
                    />
                </div>
                <div className={style['container-textos-1secao']}>
                    <h1 className={style['titulo']}  data-aos="fade-up">Vamos conversar?</h1>
                    <p className={style['subtitulo']}  data-aos="fade-up">Entre em contato conosco.</p>
                </div>
            </section>
            {/* segunda parte tela contato */}
            <section>
                <div className={style["controle-duas-divs"]}>
                    <div className={style["controle-topicos-dados"]}>
                        <div className={style["contr-posi"]}>
                            <a href="tel:01121716666">
                                <span className={`bi bi-telephone ${style.icon}`}></span>
                                <span>(11) 2171 - 6666</span>
                            </a>
                            <p href="sac@nutriz.com.br">
                                <span className={`bi bi-envelope ${style.icon}`}></span>
                                <span>sac@nutriz.com.br</span>
                            </p>
                        </div>

                        <div className={style["controle-cor-posi"]}>
                            <p className={style["conteudo-maior"]}>Indústria</p>
                            <p className={style["conteudo-escuro"]}>Rio Grande do Sul</p>
                            <a href="https://goo.gl/maps/JnyJVeY3d8zK7nJW9" target="_blanck" class="contato_ctt_endereco_maps__tMUGh">
                            Rua Buarque de Macedo, n° 965 - Bairro: Gentil. Lagoa Vermelha - RS / Brasil 
                            <br></br>
                            CEP: 95300-000</a>
                        </div>

                        <div className={style["controle-cor-posi"]}>
                            <p className={style["conteudo-maior"]}>Escritório</p>
                            <p className={style["conteudo-escuro"]}>São Paulo</p>
                            <a href="https://goo.gl/maps/kSJdjja9as5fBL8S8" target="_blanck">
                            Av. dos Autonomistas, n° 896, Sala 2804, 28° Andar. Torre Santorini, Vila Yara, Osasco - SP / Brasil 
                            <br></br>
                            CEP: 06020-010</a>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className={style["controle-tamn-form"]}>
                            <div className={style["quebra-inputs"]}>
                                <label for="nome_contato">Seu nome</label>
                                <input type="text" id="nome_contato" required></input>
                            </div>
                            <div className={style["quebra-inputs"]}>
                                <label for="email_contato">Seu e-mail</label>
                                <input type="email" id="email_contato" required></input>
                            </div>
                            <div className={style["quebra-inputs"]}>
                                <label for="empresa_contato">Nome da empresa</label>
                                <input type="text" id="empresa_contato" required></input>
                            </div>
                            <div className={style["quebra-inputs"]}>
                                <label for="assunto_contato">Assunto</label>
                                <input type="text" id="assunto_contato" required></input>
                            </div>
                            <div className={style["quebra-inputs"]}>
                                <label for="msg_contato">Sua mensagem</label>
                                <textarea type="text" id="msg_contato" required></textarea>
                            </div>
                            <button type="submit" className={style["botao-enviar"]}>ENVIAR</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contato;