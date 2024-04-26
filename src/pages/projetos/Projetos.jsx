import * as S from "./styled"
import Header from "../../components/Header/Header"
import halloween from "../../assets/halloween-em-html.png"
import prime from "../../assets/prime-em-html.png"
import ritmo from "../../assets/ritmo-da-batida-html-css.png"
import selfcare from "../../assets/selfcare-html-css.png"
import mc from "../../assets/mc-em-react.png"
import Carrosel from "react-elastic-carousel"

export default function Projetos() {
  return (
    <S.Main>
      <Header/>
      <S.BoxProjetos>
        <S.BoxImg>
          <Carrosel itemsToShow={2}>
          <img src={halloween} alt="" />
          <img src={prime} alt="" />
          <img src={ritmo} alt="" />
          <img src={selfcare} alt="" />
          <img src={mc} alt="" />
        </Carrosel>
        </S.BoxImg>
      </S.BoxProjetos>
    </S.Main>
  )
}