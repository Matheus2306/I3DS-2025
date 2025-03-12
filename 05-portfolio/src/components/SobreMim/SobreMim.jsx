import style from "./SobreMim.module.css";

const SobreMim = () => {
  return (
    <div Id="SobreMim" className={`container ${style.sobreMim}`}>
        <img src="./src/img/20241119_142557.jpg" alt="" />
      <h4>Matheus Felipe Rodrigues</h4>
      <p>Desenvolvedor FullStack</p>
      <p>
        Olá! Sou Matheus, desenvolvedor com experiência em MS SQL, C#, Python,
        JavaScript, HTML e CSS. Tenho certificações AZ-900 e AI-900, o que me
        proporciona um sólido conhecimento em computação em nuvem e inteligência
        artificial. Sou apaixonado por tecnologia e inovação, buscando sempre
        desenvolver soluções eficientes e escaláveis. Gosto de desafios que me
        permitam crescer profissionalmente e aprimorar minhas habilidades. Estou
        sempre explorando novas tecnologias e aplicando boas práticas para
        entregar projetos de qualidade. Se quiser saber mais sobre meu trabalho,
        entre em contato!
      </p>
    </div>
  );
};

export default SobreMim;
