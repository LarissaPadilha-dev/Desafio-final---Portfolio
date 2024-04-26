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


`

export const BoxImg = styled.div`
width: 70vw;
img{
    width: 20vw;
}
`