import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import s from "./header.module.scss";
import Inicio from "../../pages/Sobre/Sobre.jsx";
import ftdan from "../../assets/ftdan.jpg";
import Projetos from "../../pages/Projetos/Projetos.jsx";
import Contato from "../../pages/Contato/Contato.jsx";
import Skills from "../../pages/Skill/Skills.jsx";

export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <section className={s.Perfil}>
          <img src={ftdan} alt="Imagem de perfil da pessoal fisica Danilo" />
          <h1>Danilo Almeida</h1>
        </section>
          <nav className={s.navHeader}>
            <ul>
              <li>
                <Link className={s.Inicio} to="/">
                  Incio
                </Link>
              </li>
              <li>
                <Link className={s.Projeto} to="/Projetos">
                  Projetos
                </Link>
              </li>
              <li>
                <Link className={s.Skills} to="/Skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link className={s.Contato} to="/Contato">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
      
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
