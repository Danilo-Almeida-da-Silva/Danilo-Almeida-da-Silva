import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import s from "./header.module.scss";
import Inicio from "../../pages/Inicio.jsx";
import ftdan from "../../assets/ftdan.jpg"

export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <section className={s.Perfil}>
          <img src={ftdan} alt="Imagem de perfil da pessoal fisica Danilo" />
          <h1>Danilo Almeida</h1>
        </section>

        <section>
          <nav className={s.navHeader}>
            <ul>
              <li>
                <Link className={s.Link} to="/">
                  Incio
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}
