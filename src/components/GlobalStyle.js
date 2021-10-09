import {createGlobalStyle} from 'styled-components';

const Global=createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&display=swap'); */
*
{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body
{
  /* background-color: #1b1b1b; */
  background-image: linear-gradient(to right , #2b2b2b, #1b1b1b);
  font-family: "Inter";

}

button
{
    font-weight:bold;
    cursor:pointer;
    padding: 0.6rem 1.5rem;
    font-size:1.1rem;
    border: 3px solid  #38fff5;
    background: transparent;
    color:#38fff5;
    transition:  all  0.5s ease;
    &:hover
    {
        background: #38fff5;
        color: white;
    }
}
h2
{
    font-weight: 400;
    /* font-size: 2.2rem; */
    word-spacing: 1.5px;
    /* letter-spacing: 1.2px; */
    line-height: 1.4;
    span
    {
        font-weight: 800;
        color: #38fff5;
        font-size:3.8rem;


    }
   
}



h3
{
    color: white;
}

h4
{
    font-weight: bolder;
    color:#38fff5;
    font-size: 2rem;

}

p
{
    padding: 2.5rem 0rem;
    color:#ccc;
    font-size: 1rem;
    line-height: 1.7;
    word-spacing: 1.8px;
    letter-spacing: 1px;

}`;

export default Global;