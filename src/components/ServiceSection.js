import React from 'react'
// icons
import team from '../img/teamwork.svg';
import clock from '../img/clock.svg';
// import dia from '../img/diaphragm.svg';
// import money from '../img/money.svg';
import phone from '../img/phone.svg';
import speak from '../img/speak.svg';
//image.
import code from '../img/home-wall.png';

// importing styles
import {About,Description,Image} from '../styles';
import styled from 'styled-components';

const ServiceSection = () => {
    return (
        <Services>
                  
            <Image >
            <img src={code} alt="code-pic" />
            </Image>


            <Description >
                <h2>
                    <span className="span-2">Service</span> 
                    i Provide
                </h2>
                <Cards >
                    <Card className="card">
                        <div className="icon">
                            <img src={team} alt="" srcset="" />
                            <h3>web development</h3>
                        </div>
                        <p>i can make web application 
                            from back end to front end 
                            with MERN or DJANGO.
                        </p>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={phone} alt="" srcset="" />
                            <h3>Mobile Application</h3>
                        </div>
                        <p>i can create a mobile application
                             for both ios and android devices 
                             from react native.</p>
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={clock} alt="" srcset="" />
                            <h3>single page app</h3>
                        </div>
                        <p>i can create a whole app 
                            on a single page application 
                            with the help of routers.
                            </p> 
                    </Card>
                    <Card className="card">
                        <div className="icon">
                            <img src={speak} alt="" srcset="" />
                            <h3>Soft Skills</h3>
                        </div>
                        <p>
                            i have good soft skills and had participated in the muliple verbal events.
                        </p>
                    </Card>
                  
                </Cards>
            </Description>
         

        </Services>
    )
}

const  Services= styled(About)`
    display:flex;
    justify-content:space-between;
   
    
    h2
    {
        padding-bottom:3rem;
        span{
        color: #ff9000;
        font-weight: black;
        display: block;
        font-size: 140%;
        }
        letter-spacing: 4px;
        word-spacing:2px;
        text-transform: capitalize;
      
    }

    p
    {
        width:100%;
        padding : 2rem 0rem 4rem 0rem;
        text-align:justify;
    }

`

const Cards = styled.div`
  display:flex;
  -webkit-flex-wrap: wrap;
  flex-wrap:wrap;
  width:100%;
  /* background-color:white; */

`;

const Card = styled.div`
 flex-basis:40%;
 padding : 3rem 2rem 1rem 0rem;
    .icon
    {
        display:flex;
        align-items:center;
        h3
        {
            background-color:#ccc;
            color:#1b1b1b;
            padding: 0.8rem 1rem;
            margin-left:1rem;
            min-width:10vw;
            max-width:10vw;
            font-size: 80%;
            text-align: center;
            text-transform:capitalize;
        }

    }


`



export default ServiceSection
