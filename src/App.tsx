import { useState } from "react";
import { Header } from "./components/header";
import styles from "./app.module.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles["app"]}>
      <Header />
    </div>
  );
};

export default App;
