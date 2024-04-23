import styled from "styled-components";


export const Main = styled.main`
height: 100vh;
display: flex;
background-color: #F4AFAB;
@media (max-width: 500px) {
    flex-direction: column;
}
`;

export const Text = styled.div`
text-align: center; 
display: flex;
flex-direction: column;
h2{
    padding: 24px 0 24px 0;
    font-size: 2rem;
    color:  #f3e7d7;
}
@media (max-width: 500px) {
    flex-direction: column;
}
`;

export const BoxContato = styled.section`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 10vw;
    height: 21vh;
}
a{
   
}
p{
    
}
@media (max-width: 500px) {
    flex-direction: column;
}
`;