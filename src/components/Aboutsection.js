import React from 'react';
import PrinceMirror from '../img/Prince-mirror-selfie-bw-small.png'

// styled component
// import styled from 'styled-components';

// importing style files
import {About,Description,Hide,Image} from '../styles';



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


export default Aboutsection
