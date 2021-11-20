import favicon from "../../logo.svg";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <img src={favicon} width={32} />
      <span>Kontori Reader</span>
    </header>
  );
};
