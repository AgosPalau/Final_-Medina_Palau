import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { ContextGlobal } from "./Components/utils/global.context";
//Realizado por Tomas Medina y Agostina Palau
function App() {

  const { state } = useContext(ContextGlobal)
  return (
    <div className={state.theme ? 'dark' : 'light'}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

//Realizado por Tomas Medina y Agostina Palau