import styled,{createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
`;

export const Header = styled.header`
width: 20vw;
display: flex;
align-items: center;
flex-direction: column;
background-color: #C76D7E;
@media (max-width: 750px) {
    width: 20vw;
}
@media (max-width: 500px) {
    width: 100%;
    height: 33vh;
}
`;

export const BoxLogo = styled.div`
width: 100%;
height: 38vh;
color: #f3e7d7 ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
img{
    width: 12vw;
    border-radius: 50%;
}
@media (max-width: 500px) {
    height: 15vh;
    padding-left: 1rem;
    flex-direction: row;
}
`;

export const Title = styled.h2`
width: 100%;
text-align: center;
color: #f3e7d7 ;
`;

export const Text = styled.p`
width: 100%;
text-align: center;
color: #f3e7d7 ;
@media (max-width: 500px) {
    display: none;
}
`;

export const BoxMenu = styled.nav`
height: 38vh;
width: 100%;
li:nth-child(1){
    border-top: solid 1px #f3e7d7;
}
@media (max-width: 500px) {
    height: 15vh;
}
`;

export const Lista = styled.li`
border-bottom: solid 1px #f3e7d7;
height: 12.4vh;
display: flex;
justify-content: center;
align-items: center;
a{
  color: #f3e7d7 ;
}
@media (max-width: 500px) {
    height: 5vh;
   
}
`;