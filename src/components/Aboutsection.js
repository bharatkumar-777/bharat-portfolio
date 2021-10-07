import React from 'react';
import PrinceMirror from '../img/Prince-mirror-selfie-bw-small.png'
const Aboutsection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        My Name is <span>BHARAT</span> and i am
                    </div>
                    <div className="hide">
                         a <span>FULL STACK</span> Developer
                    </div>
                    
                </div>
                <p className="abo">
                Hire me and i will make your application with the hot technology Like MERN and react-native,
                i am a Student and i have made more than 10+ application through the agency of MERN.
                </p>
                <button className="contact">
                    contact me
                </button>

            </div>
            <div className="image">
                <img src={PrinceMirror} alt="Mypicture" srcset="" />
            </div>
        </div>
    )
}

export default Aboutsection
