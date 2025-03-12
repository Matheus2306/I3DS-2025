import style from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={style.cabecalio}>
      <header className="header text-light row ">
        <div className="col-6 col-md-6 p-0 ml-4">
          <h2>Matheus Felipe Rodrigues</h2>
        </div>
        <div className="col col-md p-0">
          <div className="d-sm-block d-md-none">
            <div className={style.menu} >
              <button id="menu-button" onClick={toggleMenu}>
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
            <div className="d-flex justify-content-end ">
              <ul className={`${style.hidden} ${style.Linknav} ${isOpen ? style.open : "hidden"}`}>
                <li>
                  <a className="text-decoration-none text-light" href="">
                    Contato
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-light" href="">
                    Projetos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
