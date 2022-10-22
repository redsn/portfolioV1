//===
// Imports
//===
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

//==
// Style
//==

const StyledAbout = styled.div`
    .container p{
        margin-bottom: 3vh;
    }
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
                    <h3>My Background</h3>
                    <p> My name is Terrence and I've worked in the pharmacy world for over 10 years as a Certified Pharmacy Technician. Although it was a rewarding experience I felt like it was time to expand my skillset to something more unfamiliar.
                        I hope to meet your expectations.
                    </p>
                    <a href="https://drive.google.com/file/d/19Xwe4hoxH6uNFC8u7rLsoAJgqfeiLpon/view?usp=sharing" className="red darken-4 btn" target="_blank" rel="noreferrer">
                        <div>
                        To Resume
                        </div>
                    </a>
                    <div className="container">
                        <div className="card contact-box white-text">
                            <div className="card-content">
                                <span className="card-title">
                                    Contact:
                                </span>
                                <div className='contact-note'>
                                <p>Email:  <span>devtluk@gmail.com</span></p>
                                    
                                </div>
                                    <a href="https://www.linkedin.com/in/terrence-luk-eng/">
                                        <div className='btn red darken-4 white-text'>
                                            linkedin
                                        </div>
                                    </a>
                            </div>
                        </div>
                    </div>                 
                </div>
        </div>
        </StyledAbout>
        </>
    )
}

export default About