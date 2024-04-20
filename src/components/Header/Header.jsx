import { Link } from "react-router-dom";
import * as S from "./styled"
import logo from "../../assets/Logo dev LP.png"


export default function Header() {
  return (
    <S.Header>
      <S.BoxLogo>
        <img src={logo} alt="foto da logo" />
        <S.Title>Larissa Padilha</S.Title>
        <S.Text>Dev Front-end</S.Text>
      </S.BoxLogo>
        <S.BoxMenu>
            <ul>
                <S.Lista><Link to="/">Inicio</Link></S.Lista>
                <S.Lista><Link to="/sobre">Sobre mim</Link></S.Lista>
                <S.Lista><Link to="/habilidades">Habilidades</Link></S.Lista>
                <S.Lista><Link to="/projeto">Projetos</Link></S.Lista>
                <S.Lista><Link to="/contato">Contato</Link></S.Lista>
            </ul>
        </S.BoxMenu>
    </S.Header>
  )
}