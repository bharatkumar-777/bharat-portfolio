import React from "react";
import PrinceMirror from "../img/Prince-mirror-selfie-bw-small.png";

// styled component
// import styled from 'styled-components';

// importing style files
import { About, Description, Hide, Image } from "../styles";

// animation
import { motion } from "framer-motion";
import {titleAnim,fade,zoomAnim as zoom} from '../animate'


// wave
import Wave from './Wave';


const Aboutsection = () => {

    // const Title =
    // {
    //    hidden:{opacity: 0,},
    //    show :{opacity:1 , transition:{duration:1,ease:'easeOut', staggerChildren:0.25}} 
    // } 
    // const container=
    // {
    //     hidden:{x:100},
    //     show :{ x:0 ,transition:{duration:1,ease:'easeOut',staggerChildren:0.25 , when :"beforeChildren"}}
        
    // }

  return (
    <About className="about">
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>
              I am <span>BHARAT</span> and i am
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              a <span>FULL STACK </span> Dev.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p className="abo" variants={fade}>
          Hire me and i will make your application with the hot technology Like
          MERN and react-native, i am a Student and i have made more than 10+
          application through the agency of MERN.
        </motion.p>
        <motion.button className="contact" variants={fade}>contact me</motion.button>
       
      </Description>
      <Image className="image">
        <motion.img src={PrinceMirror} alt="Mypicture" variants={zoom}/>
      </Image>
      <Wave/>
    </About>
  );
};

export default Aboutsection;
