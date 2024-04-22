import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio"
import Sobre from "./pages/sobre/Sobre"
import Habilidades from "./pages/habilidades/Habilidades"
import Projetos from "./pages/projetos/Projetos"
import Contato from "./pages/contato/Contato"
import { GlobalStyle } from "./components/Header/styled";


export default function App() {
  return (
    <>
    <GlobalStyle/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/habilidades" element={<Habilidades/>}/>
        <Route path="/projeto" element={<Projetos/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
   </BrowserRouter>
    </>
  )
}