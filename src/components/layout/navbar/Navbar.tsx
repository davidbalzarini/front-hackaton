import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="nav border">
      <Link to="/"><img className="logo" src="https://i.imgur.com/oGKvCzi.png" alt="logo" /></Link>
      <ul className="list">
  
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/projetos">Projetos</Link>
        </li>
        <li className="item">
          <Link to="/adicionarprojeto">Adicionar Projeto</Link>
        </li>
        <li className="item">
          <Link to="/listaprojeto">Listar Projetos</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar;