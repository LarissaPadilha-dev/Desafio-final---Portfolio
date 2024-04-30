import styled from "styled-components";
import rosa from "../../assets/rosa.jpg";

export const Main = styled.main`
height: 100vh;
display: flex;
background-image: url(${rosa});
@media (max-width: 500px) {
    flex-direction: column;
}
`;

export const BoxContato = styled.section`
width: 80vw;
height: 60vh;
text-align:center;
display: flex;
flex-direction: column;
justify-content: space-between;
h2{
    text-align:center;
    font-size: 2rem;
    color: #974755;
}
p{
    text-align:center;
    font-size: 1rem;
    color: #974755;
}
figure{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
img{
    width: 10vw;
    height: 21vh;
}
@media (max-width: 500px) {
    flex-direction: column;
}
`;