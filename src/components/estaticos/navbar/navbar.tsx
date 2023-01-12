import { Link } from "react-router-dom";




function Navbar (){
    return (
        <>
<div>
    <div className="center">
        <a href="/"><img src="https://i.imgur.com/oGKvCzi.png" alt="" /></a>
    </div>
    <div className="btn center margin">
        <Link to="/"><button className="btn btn-design">Home</button></Link>
    </div>
    <div className="btn center">
        <Link to="/criarprojetos"><button className="btn btn-design">Criar Projetos</button></Link>
    </div>
    <div className="btn center">
        <Link to="/listaprojeto"><button className="btn btn-design">Lista Projeto</button></Link>
    </div>
    <div className="btn center">
        <Link to="/projetos"><button className=" btn btn-design">Projetos</button></Link>
    </div>
</div>
</>
    )
}

export default Navbar;
