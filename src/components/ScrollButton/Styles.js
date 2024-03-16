import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: #2297bf;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 95%;
   bottom: 40px;
   height: 50px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #2297bf;
   @media screen and (max-width: 960px){
      left: 80%;
      font-size: 2.5rem;
   }
`