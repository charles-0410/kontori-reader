import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Welcome } from "./pages/welcome";
import styles from "./app.module.css";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </main>
  );
};

export default App;
