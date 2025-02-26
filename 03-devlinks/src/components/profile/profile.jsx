import style from "./profile.module.css";

const Profile = ({ children, img }) => {
  return (
    <div id={style.Profile}>
      <img src={img} alt="" />
      <p>{children}</p>
    </div>
  );
};

export default Profile;
