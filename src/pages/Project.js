import React from 'react'

// style
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// images
import athlete from '../img/athlete-small-bharat.png'
import goodtimes from '../img/goodtimes-small-bharat.png'
import racer from '../img/theracer-small-bharat.png'

const Project = () => {
    return (
        <Work>
            <h3>click the image for more details</h3>
            <Movie>
            <Title>
                <span>Amigo</span>
                a social media application
                </Title>
            <div className="line"></div>
            <Link>
            <img src={athlete} alt="athlete" />
            </Link>
            </Movie>
            <Movie>
            <Title>
                <span>Jibeer Jabber</span> 
                real time text message application</Title>
            <div className="line"></div>
            <Link>
            <img src={goodtimes} alt="athlete" />
            </Link>
            </Movie>
            
            <Movie>
            <Title>
                <span>Hunch</span> 
                simple ui music player</Title>
            <div className="line"></div>
            <Link>
            <img src={racer} alt="athlete" />
            </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height:100vh;
    /* display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    /* background-color: #3b6e9b;
     */
    overflow: hidden;
    padding:5rem 10rem;
    img
    {
        width:100%;
        height: 75vh;
        object-fit: cover;
        object-position: center;
    }
    h3
    {
        font-weight: lighter;
        font-size: 0.6rem;
        text-align: center;
        border: 2px solid white;
        width:15%;
        border-radius: 10px;
        padding: 0.2rem 0;
        margin : 0 auto;
    }
    /* margin-left: 3rem; */

`

const Movie= styled.div`
padding-bottom:10rem;
.line
{
    height:5px;
    background-color:#ff9000;
    display:block;
    width:100%;
    margin-bottom: 3rem;
}

`

const Title = styled.h1`


padding: 2rem 0rem;
width:80%;
font-weight: 300;
font-size: 1rem;
color:white;

span
{
    color:#51fff6;
    font-weight:800;
    display: block;
    font-size:3.3rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}




`


export default Project
