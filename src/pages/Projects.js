//===
// Import
//===

import styled from 'styled-components';
import project1main from '../images/project1main.png';
import project2main from '../images/project2main.png';
import project3main from '../images/project3main.png';

//==
// Styled
//==

const StyledProjects = styled.div`
    .span-desc{
        padding: 1vh 0;
        color: var(--main-clr-3);
    }
    .card-title{
        color: var(--main-clr-1);
        font-weight: 500;
        font-size: xx-large;
    }
`

//===
// Component
//===

const Projects = () => {
    return(
        <>
        <StyledProjects>
        <div className="main-container">

        <div className="section">
                <div className="container">
                    <h3>CRM</h3>
                    <div className="card">
                        <div className="card-image">
                            <img src={project3main} alt="WagTracker Landing Page" />
                        </div>
                        <div className="divider"></div>
                        <div className="card-content">
                            <span className="card-title">WagTracker</span>
                            <div className="row">
                            <span className='span-desc'>Group Project</span>
                            </div>
                        <p>
                            A site-based customer relationship manager meant to allow users to easily assign dogs to walkers. Each dog has their own profile along with an activity tracker and small map.
                        </p>
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <a href="https://github.com/redsn/dog-walking-crm" target="_blank" rel="noreferrer" className="btn red darken-4">
                                    Github
                                </a>
                                <a href="https://wagtracker.herokuapp.com/" target="_blank" rel="noreferrer" className="btn red darken-4">
                                    Live Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

            <div className="section">
                <div className="container">
                    <h3>Full Stack Application</h3>
                    <div className="card">
                        <div className="card-image">
                            <img src={project2main} alt="BucketList Main" />
                        </div>
                        <div className="divider"></div>
                        <div className="card-content">
                            <span className="card-title">BucketList</span>
                            <p>
                                BucketList is a full-stack application for users who want to track media they've seen or plan to see. Users can also see their total watch time in the profile.
                            </p>
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <a href="https://github.com/redsn/Project3-Blist-Front" target="_blank" rel="noreferrer" className="btn red darken-4">
                                    Github
                                </a>
                                <a href="https://precious-capybara-c43215.netlify.app/" target="_blank" rel="noreferrer" className="btn red darken-4">
                                    Live Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

            <div className="section">
                <div className="container">
                    <h3>Just for fun</h3>
                    <div className="card">
                        <div className="card-image">
                            <img src={project1main} alt="PokeNat Main" />
                        </div>
                        <div className="divider"></div>
                        <div className="card-content">
                            <span className="card-title">PokeNat</span>
                            <p>
                                A small personality quiz app that pulls images and information with an API.
                            </p>
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <a href="https://github.com/redsn/GA-SEI-Project-1" target="_blank" rel="noreferrer" className="btn red darken-4">
                                    Github
                                </a>
                                <a href="https://pokenat.netlify.app/" target="_blank" rel="noreferrer" className="btn red darken-4">
                                    Live Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </StyledProjects>
        </>
    )
}

export default Projects