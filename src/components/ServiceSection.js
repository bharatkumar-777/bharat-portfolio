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


const ServiceSection = () => {
    return (
        <section className="service">
            <div className="description">
                <h2><span>Service</span> i Provide</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={team} alt="" srcset="" />
                            <h3>web development</h3>
                        </div>
                        <p>i can make web application 
                            from back end to front end 
                            with MERN or DJANGO.
                        </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={phone} alt="" srcset="" />
                            <h3>Mobile Application</h3>
                        </div>
                        <p>i can create a mobile application
                             for both ios and android devices 
                             from react native.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="" srcset="" />
                            <h3>single page app</h3>
                        </div>
                        <p>i can create a whole app 
                            on a single page application 
                            with the help of routers.
                            </p> 
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={speak} alt="" srcset="" />
                            <h3>Soft Skills</h3>
                        </div>
                        <p>
                            i have good soft skills and had participated in the muliple verbal events.
                        </p>
                    </div>
                  
                </div>
            </div>
            <div className="image">
            <img src={code} alt="code-pic" />
            </div>
            
        </section>
    )
}

export default ServiceSection
