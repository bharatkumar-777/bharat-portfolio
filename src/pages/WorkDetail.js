import React,{useState,useEffect} from 'react'
import styled from 'styled-components';

import {useHistory} from 'react-router-dom';
import {workState} from '../workState';

// import img from '../img/athlete2.png'

const WorkDetail = () => {
    const his= useHistory();
    const url= his.location.pathname;
    const [works, setWorks]= useState(workState);
    const [work,setWork]= useState(null);
    const [loading,setLoading]=useState(false);
    console.log(workState()[0]);
    useEffect(()=>
    {
     const currentWork= works.filter(stateWork=>stateWork.url===url);
    //  console.log(currentWork);
    setLoading(true); 
    setWork(currentWork[0]);

    },[works,url])

    console.log(work);
    if(loading)
    {
        return (
            <>
            <Detail img={work.secondaryImg}>
                <Headline>
                    <h2>{work.title}</h2>
                    <img src={work.secondaryImg} alt={work.title} />
                </Headline>
                <section>
                <h2>Technology used</h2>
                <Awards >
                    
                    {
                        
                        
                        work.tech.map(e =>
                                <Award title={e.title} description={e.description} key={e.title}/>
                               )
                        
                    }
                </Awards>
                </section>
                <ImageContainer>
                <ImageDetail>
                    <img src={work.mainImg} alt={work.title}/>
                </ImageDetail>
                <ImageInfo>
                        <h3>About <span>{work.title}</span></h3>
                        <p>
                            {work.detail}
                        </p>
                </ImageInfo>

                </ImageContainer>
                
            </Detail>
            </>
        )
    }
   
   return(   
   <h2>Loading...</h2>
   )
    
    
    
}


const ImageInfo=styled.div`
    paddings:5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h3
    {
        font-size: 5rem;
        color:orange;
        span
        {
            display: block;
            font-size: 2.6rem;
            color: white;
        }
    }
`
const ImageContainer=styled.div`
  display: flex;
  justify-content: space-between;
`


const Detail = styled.div`
  /* padding:5rem 10rem; */
  color: white;
  section 
  {
        h2
        {
            margin: 2rem auto;
            text-align: center;
            font-size: 200%;
            font-weight: 800;
            color: orange;
        }

  }
  
 
  


`

const Headline= styled.div`
 h2
 {
     margin-bottom: 2rem;
     font-size: 3.8rem;
     color:#38fff5;
     font-weight: 900;
     position: absolute;
     top:10%;
     left:50%;
     transform: translate(-50%,-50%);
    
 }
  img
  {
     width:100%;
     height:70vh;
     object-fit: cover;
     object-position: center;
  }
  position: relative;
  min-height: 90vh;
  padding-top: 20vh;

`
const Awards = styled.div`
   
    /* padding-top: 5rem; */
    padding: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
       
    


`

const AwardStyle=styled.div`
    padding:5rem;
    h1
    {
        color: #38fff5;

    }
    .line
    {
        background-color:#ff9000;
        height: 4px;
        width: 100%;
        margin: 1rem 0rem;
    }
    p
    {
        color:white;
    }

`;

const ImageDetail=styled.div`
min-height: 50vh;
padding:5rem;
flex: 1;
img
{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
}


`;




const Award = ({title, description})=>
{
    return (
        <AwardStyle>
            <h1>{title}</h1>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}





export default WorkDetail
