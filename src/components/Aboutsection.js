import React from "react";
import PrinceMirror from "../img/Prince-mirror-selfie-bw-small.png";

// styled component
// import styled from 'styled-components';

// importing style files
import { About, Description, Hide, Image } from "../styles";

import { motion } from "framer-motion";

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
        <motion.div className="title"  >
          <Hide>
            <motion.h2>
              I am <span>BHARAT</span> and i am
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              a <span>FULL STACK </span> Dev.
            </motion.h2>
          </Hide>
        </motion.div>
        <p className="abo">
          Hire me and i will make your application with the hot technology Like
          MERN and react-native, i am a Student and i have made more than 10+
          application through the agency of MERN.
        </p>
        <button className="contact">contact me</button>
      </Description>
      <Image className="image">
        <img src={PrinceMirror} alt="Mypicture" />
      </Image>
    </About>
  );
};

export default Aboutsection;
