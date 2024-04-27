import styled from "styled-components";
import rosa from "../../assets/rosa.jpg"

export const Main = styled.main`
height: 100vh;
display: flex;
background-image: url(${rosa});
@media (max-width: 500px) {
    flex-direction: column;
}
`;

export const Sobre = styled.section`
text-align: center; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 79.3%;
height: 88vh;
h2{
    text-align: center;
    font-size: 4rem;
    color: #974755;
}
p{
    font-size: 1.4rem;
    color: #C76D7E;
}
@media (max-width: 500px) {
    flex-direction: column;
}
`;
