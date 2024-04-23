import Header from "../../components/Header/Header"
import * as S from "./styled"
import foto from "../../assets/Lari.jpg"

export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.BoxInicio>
        <img src={foto} alt="foto de apresentação" />
        <div>
        <h2>Olá sou Larissa</h2>
        <p>Desenvolvedora Front-end</p>
        </div>
       </S.BoxInicio>
      </S.Container>
    </S.Main>
  )
}
