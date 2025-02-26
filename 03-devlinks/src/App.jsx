import Links from "./components/links/Links";
import Profile from "./components/profile/profile";
import Switch from "./components/switch/Switch";
import "./App.css";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div id="App" className="">
      <Profile />
      <Switch />
      <div id="links">
        <ul>
          <Links />
          <Links />
          <Links />
          <Links />
        </ul>
      </div>
      <div id="socialLinks">
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
      </div>
      <Footer />
    </div>
  );
};

export default App;
