
import Links from "./components/links/Links";
import Profile from "./components/profile/profile";
import Switch from "./components/switch/Switch";
import "./App.css";
import photolight from "./img/baixados (1).gif"
import photodark from "./img/Google revela os 10 GIFs mais procurados pelos brasileiros em 2018 - Mega Curioso.gif"
import SocialLinks from "./components/socialLinks/SocialLinks";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
  const [islight, setislight] = useState(true);

  const toggle = () => {
    setislight(!islight);

  };
  return (
    <div id="App" className={islight ? "light" : ""}>
      <div id="container">
      <Profile img={islight ? photolight : photodark}>@MatheusFRodrigues</Profile>
      <Switch toggle={toggle} isLight={islight} />
      <div id="links">
        <ul>
          <Links link={"https://github.com/Matheus2306"}>Github</Links>
          <Links link={"https://www.instagram.com/math2306.r/"}>
            Instagram
          </Links>
          <Links link={"https://matheus2306.github.io/Portifolio/"}>
            Portifólio
          </Links>
          <Links link={"https://github.com/Matheus2306"}>Projetos</Links>
        </ul>
      </div>
      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/Matheus2306"}
          icon={"logo-github"}
          />
        <SocialLinks
          link={"https://www.instagram.com/math2306.r/"}
          icon={"logo-instagram"}
        />
        <SocialLinks
          link={
            "https://www.linkedin.com/in/matheus-felipe-rodrigues-6b4a6a33a/?trk=opento_sprofile_topcard"
          }
          icon={"logo-linkedin"}
          />
        <SocialLinks
          link={"https://www.youtube.com/@Math_rZezin"}
          icon={"logo-youtube"}
          />
      </div>
          </div>
      <Footer>MatheusFRodrigues</Footer>
    </div>
  );
};

export default App;
