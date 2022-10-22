//===
// Imports
//===
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import email from '../images/email.png';

//==
// Style
//==

const StyledAbout = styled.div`
    .contact-note p{
        font-weight: 600 !important;
        font-size: 1.3rem !important;
    }
    .contact-note span{
        font-size: 1.1rem;
    }
    .container a{
        font-family: var(--sans-ser);
    }
    .about-context p{
        font-size: 1.3rem !important;
    }
    .about-context h3{
        font-size: 3rem !important;
    }
    .embolden p{
        font-size: 1.7 !important;
        font-weight: 600 !important;
    }
    .embolden-text{
        font-size: 1.3 !important;
        font-weight: none !important;
    }
    .block-entry{
        margin-bottom: 1.5vh; 
    }
`

//===
// Component
//===

const About = () => {
    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Luk | About</title>
        </Helmet>
        <StyledAbout>
        <div className="main-container white valign-wrapper center-align stretch">
                <div className="container about-context">
                    <div className="block-entry">
                        <h3>My Background</h3>
                        <p> My name is Terrence and I've worked in the pharmacy world for over 10 years as a Certified Pharmacy Technician. Although it was a rewarding experience I felt like it was time to expand my skillset to something more unfamiliar.
                        I hope to meet your expectations.
                        </p>
                    </div>
                    <div className="divider"></div>
                    <h3>Skills</h3>
                        <div className="embolden block-entry">
                            <p>Coding Languages </p><span>JavaScript, Python, HTML, CSS</span>
                        </div>
                    <div className="embolden block-entry">
                        <p>Database Knowledge</p><span>Docker, SQL, Mongo, AWS</span>
                    </div>
                    <a href="https://drive.google.com/file/d/19Xwe4hoxH6uNFC8u7rLsoAJgqfeiLpon/view?usp=sharing" className="block-entry red darken-4 btn" target="_blank" rel="noreferrer">
                        <div>
                        To Resume
                        </div>
                    </a>
                    <div className="divider"></div>
                    <div className="embolden block-entry">
                        <h3>Contact</h3>
                        <img src={email} alt="email" />
                    </div>
                        <a href="https://www.linkedin.com/in/terrence-luk-eng/">
                            <div className="btn red darken-4 white-text block-entry">linkedin</div>
                        </a>             
                </div>
        </div>
        </StyledAbout>
        </>
    )
}

export default About