import Header from "../../components/Header/Header"
import React, { useState, useEffect } from 'react';
import * as S from "./styled"
import foto from "../../assets/Lari.jpg"

export default function Inicio() {
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  
  useEffect(() => {
    const text1 = "Olá sou Larissa";
    const text2 = "Desenvolvedora Front-end";
    
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    
    const interval1 = setInterval(() => {
      setDisplayText1((prevText) => {
        if (currentIndex1 === text1.length) {
          clearInterval(interval1);
          return prevText;
        }
        currentIndex1++;
        return text1.slice(0, currentIndex1);
      });
    }, 200); 
    
    setTimeout(() => {
      const interval2 = setInterval(() => {
        setDisplayText2((prevText) => {
          if (currentIndex2 === text2.length) {
            clearInterval(interval2);
            return prevText;
          }
          currentIndex2++;
          return text2.slice(0, currentIndex2);
        });
      }, 300);
    }, text1.length * 100); 

    return () => {
      clearInterval(interval1);
    };
  }, []);
  
  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.BoxInicio>
        <img src={foto} alt="foto de apresentação" />
        <S.Texto>
        <h2>{displayText1}</h2>
        <p>{displayText2}</p>
        </S.Texto>
       </S.BoxInicio>
      </S.Container>
    </S.Main>
  )
}
