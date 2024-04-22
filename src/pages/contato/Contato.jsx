import Header from '../../components/Header/Header'
import * as S from "./styled"
import linkedin from "../../assets/linkedin.png"
import email from "../../assets/email.png"
import git from "../../assets/github.jpg"

export default function Contato() {
  return (
    <S.Main>
      <Header/>
      <S.Text>
        <h2>Contato</h2>
      </S.Text> 
      <S.BoxContato>
      <a href=""><img src={linkedin} alt="imagem do linkedin" /></a>
      <a href=""><img src={email} alt="imagem email" /></a>
      <a href=""><img src={git} alt="imagem do github" /></a>
      </S.BoxContato>
    </S.Main>
  )
}