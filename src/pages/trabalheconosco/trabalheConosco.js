import { useEffect,useState} from "react";
import style from './trabalheConosco.module.css';
import AOS from 'aos'; //Importa o código JavaScript da biblioteca
import 'aos/dist/aos.css'; // importando uma biblioteca js que faz animações ao scrollar

import emailjs from "@emailjs/browser";

const TrabalheConosco = () => {
    useEffect(() => {
        document.title = "Trabalhe Conosco - Nutriz"
        AOS.init({ duration: 1000 }); // 1000ms = 1s
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

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.telefone.value;
        const job = e.target.vaga.value;

        emailjs.send(  
        "service_3wjoc8b",  
        "template_f0875nh",  
        {
            name,
            email,
            phone,
            job,
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
            <section>
                <div className={style["img-container"]}>
                    <img className={style["primeira-img"]} src='/arquivossite/img/background_trabcon.png' alt='imagem de fundo legumes' style={{
                        transform: `translateY(${offset}px) scale(${zoom})`,
                        transition: "transform 1.0s ease-out",
                    }}/>
                

                    <div className={style["texto-sobre-imagem"]} data-aos="fade-up">
                        <h1 className={style["elem-titulo"]}>Faça parte do time Nutriz</h1>

                        <h4 className={style["elem-subtitulo"]}>Trabalhe em uma das maiores empresas do ramo alimentício do Brasil e com um time diferenciado! Preencha o formulário e candidate-se a uma vaga.</h4>
                    </div>   
                </div>
            </section>

            <section className={style["secao-input-centralizada"]}>
                <form onSubmit={handleSubmit}>
                    <div className={style["controle-posicao-inputs"]}>
                        <div className={style["container-inputs"]}>
                            <label for="name">Diga seu nome</label>
                            <input className={style["input-estilizado"]} type='text' id="name" required/>
                        </div>
                        <div className={style["container-inputs"]}>
                            <label for="name">Seu e-mail</label>
                            <input className={style["input-estilizado"]} type='email' id="email" />
                        </div>
                        <div className={style["container-inputs"]}>
                            <label for="name">Seu telefone</label>
                            <input className={style["input-estilizado"]} type='text' id="telefone" maxLength={15}/>
                        </div>
                        <div className={style["container-inputs"]}>
                            <label for="name">Vaga</label>
                            <input className={style["input-estilizado"]} type='text' id="vaga" />
                        </div>

                        <div className={style["ultimo-input"]}>
                            <input type="checkbox" id="termos" required></input>
                            <label for="termos">
                                Concordo com os termos da
                                <a href="/politica-de-privacidade" target="_blank"> Política de Privacidade e Processamento de Dados da Nutriz</a>
                            </label>
                        </div>
                        <button type="submit" className={style["botao-enviar"]}>ENVIAR</button>
                    </div>
                </form>
            </section>
        </main>
    ) 
    
};

export default TrabalheConosco;
