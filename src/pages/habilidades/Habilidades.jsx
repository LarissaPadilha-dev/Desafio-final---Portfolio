import Header from '../../components/Header/Header'
import * as S from "./styled"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import styled from "../../assets/styled-components 2.png"

export default function Habilidades() {
  return (
    <S.Main>
      <Header/>
      <S.Title>
        <h2>Habilidades</h2>
      </S.Title>
      <S.BoxHabilidades>
      <a href=""><img src={html} alt="imagem de componente html" /></a>
      <a href=""><img src={css} alt="imagem de componente css" /></a>
      <a href=""><img src={js} alt="imagem de componente js" /></a>
      <a href=""><img src={react} alt="imagem de componente react" /></a>
      <a href=""><img src={styled} alt="imagem de componente styled-components" /></a>
      </S.BoxHabilidades>
    </S.Main>
  )
}