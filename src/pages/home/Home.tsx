import { Grid } from "@material-ui/core";
import './Home.css'

function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <div className="bemvindo">
                    <h1>Bem vindo a GenProjects!</h1>
                    </div>
                    <div></div>
                    <p className="adicionar">Aqui você poderá ver todos os Projetos Integradores da Generation Brasil e adicionar o do seu grupo!</p>
                    
                   
                </Grid>
                <Grid item xs={6} >
                    <img className="robo" src="https://s3-alpha-sig.figma.com/img/0377/6400/29dd5e2d82ea2ee66b2e4c67789fab17?Expires=1674432000&Signature=VMo0p07uMI0oaCPrXJNCRLe3mWaBgmnr7IDf55Qs8fOFeanRUJTIBZTpBVrqrc-aJkKtN9b-W8cFAQsLcic1xlP70JtrkOVtVeVuwANshmzfO~-PEfgrF~~zWzuMWTEslWxMcXPBRn5rRRBAxtaBsIgRk4GSci3VUL3Cx1WvF-zbpZywEWaf6cF3C4y9FK6ssuapMgZgVIwqWhFiku4UvDoIoiPQExxYqD3PmmRm3dvcas1K9KVPvnGr~6upb1SfhAhT-8Gtb8A-5GBzQ9hJYQ~pUnb6OwYPeZJECQWxXG4XFUSIPQVRnDHT~WZuDlsCggqfRd1VBLagui5NbdfCQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" width="500px" />
                </Grid>
            </Grid>
            
            <div >
                <a href="/projetos"><button className="botao1">Explorar</button></a>
                <a href="/adicionarprojeto"><button className="botao2">Adicionar Projeto</button></a>
               
            </div>

        </>
    )
}

export default Home;