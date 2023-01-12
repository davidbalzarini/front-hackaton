import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import './AdicionarProjeto.css'

function AdicionarProjeto() {
    return (
        <>
            <div>
                <div className="container-titulo">
                    <h1 className="texto-titulo">Adicionar projeto</h1>
                    <h2 className="texto-subtitulo">Adicione o Projeto Integrador do seu grupo</h2>
                </div>
            </div>
            <div className="container-grid">
                    <div className="black">
                        <h3 className="text-white">Projeto integrador</h3>
                        <p className="margin-top-30 text-white">Nome do projeto:</p>
                        <input className="input-dado"></input>
                        <p className="margin-top-30 text-white">Logo:</p>
                        <input className="input-dado "></input>
                        <p className="margin-top-30 text-white">Link do projeto:</p>
                        <input className="input-dado"></input>
                    </div>
                    <div className="black">
                        <h3 className="text-white">Grupo do projeto</h3>
                        <p className="margin-top-30 text-white">Número do grupo:</p>
                        <input className="input-dado"></input>
                        <p className="margin-top-30 text-white">Informações:</p>
                        <input className="input-dado "></input>
                        <div className="block"><Link to={"/projetos"} className="semlink"><button className="button-add button-design">Adicionar Projeto</button></Link></div>
                        
                    </div>
                    <div className="black">
                        <h3 className="text-white">Turma</h3>
                        <p className="margin-top-30 text-white">descrição</p>
                        <textarea className="input-dados"></textarea>
                        <p className="margin-top-40 text-white">A turma está ativa?</p>
                        <input type="checkbox" name="" id="" className="input-check"/>
                    </div>
            </div>
        </>
    )
}

export default AdicionarProjeto;