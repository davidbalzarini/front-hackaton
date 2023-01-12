import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import AdicionarProjeto from "./pages/adicionarProjeto/AdicionarProjeto";


import Home from "./pages/home/Home";
import ListaProjeto from "./pages/listaProjeto/ListaProjeto";
import Projetos from "./pages/projetos/Projetos";


function App() {
  return (

    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/adicionarprojeto" element={<AdicionarProjeto />} />

          <Route path="/projetos" element={<Projetos />} />
          
         <Route path="/listaprojeto" element={<ListaProjeto />} />
        </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
