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
          <img src={halloween} alt="site de halloween" />
          <a href="https://ssqn3f-5000.csb.app/" target="blank">
          <button>Deploy</button>
          </a>
          <img src={prime} alt="site do prime video" />
          <a href="https://larissapadilha-dev.github.io/Desafio-2-Prime-Video/" target="blank">
          <button>Deploy</button>
          </a>
          <img src={ritmo} alt="site no ritmo da batida" />
          <a href="https://p4jgfh.csb.app/"target="blank">
          <button>Deploy</button>
          </a>
          <img src={selfcare} alt="site selfcare" />
          <a href="https://larissapadilha-dev.github.io/Desafio-Final---Modulo-1/"target="blank">
          <button>Deploy</button>
          </a>
          <img src={mc} alt="site do mc" />
          <a href="https://mc-donalds-two.vercel.app/">
          <button>Deploy</button>
          </a>
        </Carrosel>
        </S.BoxImg>
      </S.BoxProjetos>
    </S.Main>
  )
}