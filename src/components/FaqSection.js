import React from 'react'

import styled from 'styled-components';
import {About} from '../styles';


const FaqSection = () => {
    return (
        <Faq>
            <h2>Have questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>What technology are you familiar with?</h4>
                <div className="answer">
                    <p>
                    i have proficency in the full stack development with mongoDb , react, express and NodeJS.
                    but alongside that i can handle server side rendering with firebase and django(python) also.
                    i can do algorithms in c++.
                    alongside web development i can make mobile application with the react native platform too.
                    </p>
                   
                   
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What type of project you have made</h4>
                <div className="answer">
                    <p>
                    i have made a endless amount of small scale project but my bigger one are 
                    <div className="project">
                    Amigo – social media application
Using MERN I have developed a sweeping real-time social media application
that allows users to post interesting events that happened in their lives, in which a user can do the
functionality of Email login using JWT, OAuth Google login and have a lot of robust features like pagination
searching and follows the principle of CRUD and user can also add comments on another post
                    </div>
                    <div className="project-2">
                    Jibber-jabber – real time chat application
                    With Direct and Group Chats, emojis & Reactions, Built-in Gif support, the ability to edit & delete messages,
                    specialized commands. it is a full stack application similar to the discord but very light weight and a run on
                    a real time environment with get stream.
                    </div>
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What is your education qualification</h4>
                <div className="answer">
                    <p>
                    i have done my 10th with 85.5% from CBSE board from CRDAV public school, ellenabad.<br/>
                    i have done my 12th with 73.8% from CBSE board from nachiketan public school, ellenabad.<br/>
                    i have completed my under-graduation from CGC jhanjeri,mohali in computer application.<br/>

                    alongside that i am self taught full stack web developer and i making applications in react and node from more than a year

                    </p>
                   
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What are your hobbies</h4>
                <div className="answer">
                   <p>
                   i like to design front end design by myself in free time every project wheather a small scale or large scale 
                    all the ui has been design by me. <br/>
                    i like to write essays and analogy on the cinema of the whole world my favorite director is david fincher. <br/>
                    also, i like to read philisophy of stoicism , absurduism and excistensionalism and my favorite writer is Albert camus
                   </p>
                   
                </div>
                <div className="faq-line"></div>
            </div>

        </Faq>
    )
}

const Faq = styled(About)`
display: block;
h2
{
    font-weight: lighter;
    padding-bottom:2rem;
    span
    {
        display:block;
        font-size:200%;
    }

}
    .faq-line
    {
        background:#cccccc;
        height:0.2rem;
        margin:2rem 0rem;
        width:100%;
    }
    .question
    {
        padding:3rem 0rem;
        cursor:pointer;
    }
    .answer
    {
        padding:2rem 0rem;
        p
        {
            padding: 1rem 0;
        }
    }

`


export default FaqSection
