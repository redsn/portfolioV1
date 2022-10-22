//===
// Imports
//===

import styled from 'styled-components';

//===
// Styled
//===

const StyledHome = styled.div`
 .main-container{
    background-color: black !important;
    border: none !important;
    box-shadow: none !important;
    color: white !important;
 }
 .container{
    background-color: black !important;
 }
 .container p{
    font-size: 2rem !important;
 }
 .container h3{
    font-size: 4rem !important;
 }
 .white{
    background-color: black !important;
 }
`

//===
// Component
//===

const Home = () => {
    return(
        <>
        <StyledHome>
        <div className="main-container valign-wrapper center-align stretch">
            <div className="container">
                <h3>Terrence's Portfolio</h3>
                <p>Software Engineer</p>
            </div>
        </div>
        </StyledHome>
        </>
    )
}

export default Home