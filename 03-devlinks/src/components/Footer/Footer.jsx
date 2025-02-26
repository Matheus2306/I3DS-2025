import "./Footer.module.css";

const Footer = ({ children }) => {
  return (
    <footer>
      <p>
        Feito com ❤️ por{" "}
        <a href="https://github.com/Matheus2306" target="_blank">
          {children}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
