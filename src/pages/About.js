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
        <div className="main-container">
            <h1>Hey there, it's Terrence</h1>
                <div className="container">
                    <p> I've worked in the Pharmacy world for over 10 years as a Certified Pharmacy Technician and decided that it was time to expand my horizons.
                        I hope to meet your expectations.
                    </p>
                    <a href="http://google.com" className="red darken-4 btn" target="_blank" rel="noreferrer">
                        <div>
                        To Resume
                        </div>
                    </a>                  
                </div>
        </div>
        </StyledAbout>
        </>
    )
}

export default About