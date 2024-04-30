import Header from '../../components/Header/Header'
import * as S from "./styled"
import linkedin from "../../assets/linkedin.png"
import email from "../../assets/email.png"
import git from "../../assets/github.jpg"

export default function Contato() {
  return (
    <S.Main>
    <Header/>
    <S.BoxContato>
    <h2>Contato</h2>
    <figure>
    <a href="https://www.linkedin.com/in/larissapm23"><img src={linkedin} alt="imagem do linkedin" /></a>
    <p>Linkedin</p>
    <a href=""><img src={email} alt="imagem email" /></a>
    <p>Email: larissapadilhadev@gmail.com</p>
    <a href="https://github.com/Laridev18"><img src={git} alt="imagem do github" /></a>
    <p>Github</p>
    </figure>
    </S.BoxContato>
  </S.Main>
)
}