import React from 'react';
import PrinceMirror from '../img/Prince-mirror-selfie-bw-small.png'

// styled component
import styled from 'styled-components';

const Aboutsection = () => {
    return (
        <About className="about">
            <Description>
                <div className="title">
                    <Hide>
                        <h2>
                        My Name is <span>BHARAT</span> and i am
                        </h2>
                        
                    </Hide>
                    <Hide>
                        <h2>
                        a <span>FULL STACK</span> Developer
                        </h2>
                         
                    </Hide>
                    
                </div>
                <p className="abo">
                Hire me and i will make your application with the hot technology Like MERN and react-native,
                i am a Student and i have made more than 10+ application through the agency of MERN.
                </p>
                <button className="contact">
                    contact me
                </button>

            </Description>
            <Image className="image">
                <img src={PrinceMirror} alt="Mypicture"/>
            </Image>
        </About>
    )
}


const About=styled.div`
   min-height:90vh;
   display:flex;
   align-items:center;
   justify-content: space-between;
   
   padding: 5rem 10rem;
   color:white;
   /* background-color: #161616; */



`;


const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2
  {
      font-weight: lighter;
  }

`


const Image=styled.div`
   flex: 1;
   display: flex;
   justify-content:center;
   align-items: center;
   overflow: hidden;
   img
   {
       /* margin:0 auto; */
       width:80%;
       height: 80vh;
       object-fit: cover;
       object-position: top;
       
    }

`;

const Hide=styled.div`
  overflow: hidden;
  

`
export default Aboutsection
