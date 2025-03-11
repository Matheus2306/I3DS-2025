import "./Footer.css";

const Footer = (props) => {
  return (
    <footer>
      <p>
        feito com ❤️ <a href={props.DEVLInk} target="_blank">{props.DEVname}</a>
      </p>
    </footer>
  );
};

export default Footer;
