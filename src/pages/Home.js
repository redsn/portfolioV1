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
 }
 .container{
    background-color: black !important;
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

            </div>
        </div>
        </StyledHome>
        </>
    )
}

export default Home