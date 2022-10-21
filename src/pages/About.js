//===
// Imports
//===
import styled from 'styled-components';

//==
// Style
//==

const StyledAbout = styled.div`
    .container p{
        margin-bottom: 3vh;
    }
`

//===
// Component
//===

const About = () => {
    return(
        <>
        <StyledAbout>
        <div className="main-container valign-wrapper center-align stretch">
                <div className="container">
                    <h1>Hey there, it's Terrence</h1>
                    <p> I've worked in the Pharmacy world for over 10 years as a Certified Pharmacy Technician and decided that it was time to expand my horizons.
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
                                <div>
                                    <p>
                                    Email: devtluk@gmail.com
                                    </p>
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