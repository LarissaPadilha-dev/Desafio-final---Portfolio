import styled from "styled-components";


export const Main = styled.main`
height: 100vh;
display: flex;
background-color: #F4AFAB;
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 50%;
  }
`;

export const BoxInicio = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
h1{
    font-size: 3rem;
    width: 40vw;
    color: white;
}
p{
   font-size: 2rem; 
   width: 45vw;
   color: white;
}
img{
    width: 30vw;
    border-radius: 10px;
}
`