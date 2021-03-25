import React from 'react';
import lilogo from '../assets/lilogo.png';
import githublogo from '../assets/githublogo.png';

function Footer(){
    return (
        <React.Fragment>
            <div id="footerLine"></div>
            <h1 className="footerContent" id="footerLeft">Jose Santana, 2021</h1>
            <div className="footerLinks">
                <a href='https://www.linkedin.com/in/jose-santana-01/' target="_blank" rel="noreferrer">
                    <img id="lilogo" src={lilogo} alt="linkedIn logo"/>
                </a>
                <a href='https://github.com/jose-santana7' target="_blank" rel="noreferrer">
                    <img id="githublogo" src={githublogo} alt="github logo" />
                </a>
            </div>
            
            <h1 className="footerContent" id="footerRight">Credits</h1>
        </React.Fragment>
    )
};

export default Footer;