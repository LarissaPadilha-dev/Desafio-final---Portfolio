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

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.div`
width: 70%;
text-align: center; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h2{
    font-size: 3rem;
    width: 40vw;
    color: #974755;
}
p{
   font-size: 2rem; 
   width: 45vw;
   color:#974755;
}
`;

export const BoxInicio = styled.div`
width: 80%;
display: flex;
align-items: center;
img{
    width: 27.6vw;
    border-radius: 10px;
    display: flex;
}
`;