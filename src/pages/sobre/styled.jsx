import styled from "styled-components";


export const Main = styled.main`
height: 100vh;
display: flex;
background-color: #E1ACB4;
@media (max-width: 500px) {
    flex-direction: column;
}
`;

export const Container = styled.section`
text-align: center; 
display: flex;
flex-direction: column;
h2{
    padding: 24px 0 24px 0;
    font-size: 4rem;
    color:  #f3e7d7;
}
p{
    font-size: 1.4rem;
    color: #f3e7d7;
}
@media (max-width: 500px) {
    flex-direction: column;
}
`;
