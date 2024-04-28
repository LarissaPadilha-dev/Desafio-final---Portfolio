import Header from '../../components/Header/Header'
import React, { useState, useEffect } from 'react';
import * as S from "./styled"

export default function Sobre() {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const text =
      "Olá!! Sou a Larissa, minha jornada profissional teve início na área de alimentos, onde me formei como Tecnóloga em Alimentos e me especializei em Vigilância Sanitária e Qualidade de Alimentos e em Microbiologia Avançada. Essa experiência me proporcionou um conhecimento profundo da indústria alimentícia e me ensinou a importância da qualidade e da segurança alimentar. Uma entusiasta da tecnologia e sempre fascinada pelo mundo digital, busquei aprimorar meus conhecimentos nessa área me formando no curso técnico em Redes de Computadores. Essa base me deu a oportunidade de explorar diferentes áreas da tecnologia da informação, despertando meu interesse pelo desenvolvimento front-end onde é a minha mais recente formação através da escola de programação Vai na Web, e vejo a área do desenvolvimento como uma forma de agregar valor ao meu currículo, combinando minha paixão pela tecnologia com minha experiência em alimentos.";
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) clearInterval(interval);
    }, 50); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <S.Main>
      <Header/>
      <S.Sobre>
        <h2>Sobre</h2>
        <p>{displayText}</p>
      </S.Sobre>
    </S.Main>
  )
}