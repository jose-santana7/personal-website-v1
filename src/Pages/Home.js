import React from 'react';
import arrowDown from '../assets/arrowDown.png';
import duckie from '../assets/duckie.png';

const Home = () => {
    return (
        <React.Fragment>
            <h1 className="landingText aspiring rotate">[aspiring]</h1>
            <div className="landingContainer">
                <h2 className="landingText mainText">Cyber security analyst with a passion for education!</h2>
            </div>
            <div id="duckHead"></div>
            <div id="duckBody"></div>
            <div id="duckLeftEye"></div>
            <div id="duckRightEye"></div>
            <div id="duckBill"></div>
            <img src={arrowDown} id="arrowDown" className="bounce" alt="arrow facing down"/>
            <div className="aboutPreface">
                <img src={duckie} className="duckie" alt="Rubber Duck Outline"/>
                <h1 className="aboutPrefaceTitle w">W</h1>
                <h1 className="aboutPrefaceTitle h">H</h1>
                <h1 className="aboutPrefaceTitle o">O</h1>
                <h1 className="aboutPrefaceTitle i">I</h1>
                <h1 className="aboutPrefaceTitle s">S</h1>
                <h1 className="aboutPrefaceTitle j">J</h1>
                <h1 className="aboutPrefaceTitle o2">O</h1>
                <h1 className="aboutPrefaceTitle s2">S</h1>
                <h1 className="aboutPrefaceTitle e">E</h1>
                <h1 className="aboutPrefaceTitle q">?</h1>
                <div id="aboutPrefaceContentContainer">
                    <h1 id="aboutPrefaceContent">I am a 19 year old chicano from South Central Los Angeles who’s extremely
                    passionate about cyber security/information technology and equally passionate
                    about uplifting, aiding, and educating my community. Click Learn More to hear 
                    about me and my goals in depth!
                    </h1>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Home;