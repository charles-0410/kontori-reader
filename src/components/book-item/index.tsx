import { FC } from "react";
import styles from "./index.module.css";

interface BookItemProps {
  src: string; // url
}

export const BookItem: FC<BookItemProps> = (props) => {
  const { src } = props;
  return (
    <div className={styles["root"]}>
      <div className={styles["image"]}>
        <span>10</span>
        <img src={src} />
      </div>
      <span className={styles["title"]}>最後までよろしくお願いします</span>
    </div>
  );
};
