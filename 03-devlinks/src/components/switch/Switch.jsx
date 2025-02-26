import styles from "./switch.module.css";

const Switch = ({ toggle, isLight }) => {
  return (
    <div className={isLight ? styles.light : ""}>
      <div onClick={toggle} id={styles.switch}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default Switch;
