
import styled from 'styled-components'

export const About=styled.div`
min-height:90vh;
display:flex;
align-items:center;
justify-content: center;

padding: 5rem 10rem;
color:white;
/* background-color: #161616; */



`;


export const Description = styled.div`
flex: 1 0 50%;
padding-right: 5rem;
h2
{
   font-size:2.2rem;
   font-weight: 400;
}

`


export const Image=styled.div`
flex: 1 0 50%;
display: flex;
justify-content:center;
align-items: center;
overflow: hidden;

img
{
    /* margin:0 auto; */
    width:70%;
    height: 70vh;
    object-fit: cover;
    object-position: top;
    
 }

`;

export const Hide=styled.div`
overflow: hidden;


`