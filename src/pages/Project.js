import React from "react";

// style
import styled from "styled-components";
import { Link } from "react-router-dom";

// images
import athlete from "../img/athlete-small-bharat.png";
import goodtimes from "../img/goodtimes-small-bharat.png";
import racer from "../img/theracer-small-bharat.png";

// animations
import { motion } from "framer-motion";
import { pageAnimation,fade,zoomAnim as zoom ,slider} from "../animate";

const Project = () => {
  return (
    <Work 
    variants={pageAnimation} 
    initial="hidden" 
    animate="show" 
    exit="exit"
    style={{backgroundImage: "linear-gradient(to right, #008594,#d39000)"}}
    >
      <h3>click the image for more details</h3>
      <Movie>
        <Title variants={fade}>
          <span>Amigo</span>a social media application
        </Title>
        <motion.div className="line" variants={slider}></motion.div>
        <Link to="/projects/amigo">
          <Hide>
          <motion.img src={athlete} alt="athlete" variants={zoom}/>
          </Hide>
        </Link>
         
      </Movie>
      <Movie>
        <Title variants={fade}>
          <span>Jibber Jabber</span>
          real time text message application
        </Title>
        <motion.div className="line"></motion.div>
        <Link to="/projects/jibjab">
          <motion.img src={goodtimes} alt="athlete" variants={zoom}/>
        </Link>
      </Movie>

      <Movie>
        <Title variants={fade}>
          <span>Hunch</span>
          simple ui music player
        </Title>
        <motion.div className="line"></motion.div>
        <Link to="/projects/hunch">
          <motion.img src={racer} alt="athlete" variants={zoom}/>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  /* display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  /* background-color: #3b6e9b;
     */
  overflow: hidden;
  padding: 5rem 10rem;
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
    object-position: center;
  }
  h3 {
    font-weight: lighter;
    font-size: 0.6rem;
    text-align: center;
    border: 2px solid white;
    width: 15%;
    border-radius: 10px;
    padding: 0.2rem 0;
    margin: 0 auto;
  }
  /* margin-left: 3rem; */
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 5px;
    background-color: #ff9000;
    display: block;
    width: 100%;
    margin-bottom: 3rem;
    background-image: linear-gradient();
  }
`;

const Title = styled(motion.h1)`
  padding: 2rem 0rem;
  width: 80%;
  font-weight: 300;
  font-size: 1rem;
  color: white;

  span {
    color: #51fff6;
    font-weight: 800;
    display: block;
    font-size: 3.3rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
`;

const Hide= styled.div`
  overflow: hidden;
`

export default Project;
