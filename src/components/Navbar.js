import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <StyledNav>
        <h1>
        <Link to="/" id="logo">Bharat</Link>
         </h1>
         <ul>
            <li>
            <Link to="/">about me</Link>  
               </li>
            <li>
            <Link to="/projects">projects</Link>
            </li>
            <li>
            <Link to="/contact">contact me</Link>
            </li>
        </ul> 
        </StyledNav>

    )
}

const StyledNav= styled.nav`
min-height: 10vh;
display: flex;
margin:auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background-color: #1a1a1a;

#logo
{
    font: 5.5rem;
    color:white;
    text-decoration:none;
    font-family: 'Kaushan Script', cursive;
}

ul
{

    list-style: none;
    display: flex;
    justify-content: space-around;
    a
    {
        color:white;
        text-decoration: none;
    }
    li
    {
        padding-left: 8rem;
        position: relative;
    }
   
}

`

export default Navbar
