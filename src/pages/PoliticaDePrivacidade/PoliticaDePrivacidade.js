// src/pages/PoliticaDePrivacidade.jsx
import { useEffect, useState } from "react";
import style from "./politicaDePrivacidade.module.css";
import AOS from 'aos'; //Importa o código JavaScript da biblioteca
import 'aos/dist/aos.css'; // importando uma biblioteca js que faz animações ao scrollar


const PoliticaDePrivacidade = () => {
  useEffect(() => {
  document.title = "Política de Privacidade e Processamento de Dados da Nutriz"; // título da aba
  AOS.init({ duration: 1500 }); // 1000ms = 1s
  }, []);

  return (
    <main>
      <section className={style["secao-priva"]}>
        <h1 className={style["politica-h1"]} data-aos="fade-up">Termo de Políticas de Privacidade, Cookies e Processamento de Dados</h1>

        <p>Obrigado por visitar o site da Nutriz, empresa do ramo alimentício, acessível através do domínio nutriz.com.br. Nós valorizamos sua privacidade e nos esforçamos para proteger suas informações pessoais. Este documento descreve como coletamos, utilizamos e protegemos os dados que você compartilha conosco ao acessar nosso site. Recomendamos que você leia atentamente este Termo de Políticas de Privacidade, Cookies e Processamento de Dados para entender como suas informações serão tratadas.</p>
        
        <h3>1. Coleta de Informações</h3>

        <p>1.1 Informações Pessoais: Ao visitar nosso site, podemos solicitar que você forneça informações pessoais, como nome, endereço de e-mail, número de telefone, currículo, para que possamos entrar em contato com você ou fornecer serviços personalizados. Essas informações serão coletadas apenas com seu consentimento explícito e serão utilizadas de acordo com esta política.</p>

        <p>1.2 Informações de Navegação: Podemos coletar informações não pessoais, como endereço IP, tipo de navegador, provedor de serviços de internet (ISP), páginas visitadas, data e horário de acesso. Essas informações são coletadas automaticamente através de cookies e outras tecnologias similares, e têm o objetivo de melhorar sua experiência de navegação em nosso site.</p>

        <h3>2. Uso de Informações</h3>

        <p>2.1 Uso de Informações Pessoais: As informações pessoais fornecidas por você serão utilizadas para os seguintes propósitos:</p>

        <p>a) Fornecer serviços personalizados de acordo com suas preferências;</p>

        <p>b) Processar e responder a suas solicitações, dúvidas ou reclamações;</p>

        <p>c) Enviar informações relevantes sobre nossos produtos, promoções ou eventos, desde que você tenha consentido previamente em receber tais comunicações;</p>

        <p>d) Melhorar continuamente nosso site e serviços, com base em suas opiniões e feedbacks.</p>

        <p>2.2 Uso de Informações de Navegação: As informações de navegação coletadas através de cookies e tecnologias similares são utilizadas para fins estatísticos e analíticos, a fim de entender melhor como nossos visitantes interagem com o site e melhorar sua usabilidade. Essas informações podem ser compartilhadas de forma agregada e anônima com terceiros, como parceiros de publicidade, para fins de análise de tendências e marketing.</p>

        <h3>3. Cookies</h3>

        <p>3.1 Cookies: Um cookie é um pequeno arquivo de texto que é armazenado no seu dispositivo quando você visita nosso site. Utilizamos cookies para diversos fins, como reconhecer seu dispositivo, lembrar suas preferências e fornecer conteúdo personalizado. Você pode configurar seu navegador para recusar todos os cookies ou para alertá-lo quando um cookie estiver sendo enviado. No entanto, observe que algumas partes do site podem não funcionar corretamente se os cookies forem desativados.</p>

        <h3>4. Compartilhamento de Informações</h3>

        <p>4.1 Compartilhamento com Terceiros: Podemos compartilhar suas informações pessoais com terceiros apenas nos seguintes casos:</p>

        <p>a) Quando você nos autoriza expressamente a fazê-lo;</p>

        <p>b) Para cumprir obrigações legais, como responder a solicitações de autoridades competentes;</p>

        <p>c) Com provedores de serviços terceirizados que nos auxiliam na operação do site e na prestação de serviços, desde que esses terceiros concordem em manter suas informações confidenciais.</p>

        <h3>5. Segurança de Dados</h3>

        <p>5.1 Segurança: Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão ou armazenamento eletrônico é 100% seguro, portanto, não podemos garantir a segurança absoluta de suas informações.</p>

        <h3>6. Alterações nesta Política</h3>

        <p>6.1 Atualizações: Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de privacidade. Recomendamos que você reveja esta política regularmente para estar ciente de quaisquer alterações.</p>

        <h3>7. Contato</h3>

        <p>7.1 Contato: Se você tiver alguma dúvida, preocupação ou solicitação relacionada a esta Política de Privacidade, entre em contato conosco através dos canais disponibilizados em nosso site.</p>

        <p>Ao continuar a utilizar nosso site, você concorda com os termos desta Política de Privacidade, Cookies e Processamento de Dados.</p>


      </section>
    </main>
  );
}

export default PoliticaDePrivacidade;
