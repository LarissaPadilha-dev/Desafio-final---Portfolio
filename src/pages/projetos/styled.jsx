import styled from "styled-components";


export const Main = styled.main`
height: 100vh;
display: flex;
background-color: #E1ACB4;
@media (max-width: 500px) {
    flex-direction: column;
}
`;

export const BoxProjetos = styled.section`
width: 100%;
display: flex;
justify-content: center;
align-items: center;


`;

export const BoxImg = styled.div`
width: 70vw;
img{
    width: 20vw;
}
button {
padding: 10px 20px;
background-color: #C76D7E;
border: none;
border-radius: 5px;
color: white;
  &:hover{
    padding: 8px 20px;
    background-color:#F4AFAB;
  }
}
`;