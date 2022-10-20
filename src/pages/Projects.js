//===
// Import
//===

import styled from 'styled-components';
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
                <h3>Project 1</h3>
                <div className="card">
                    <div className="card-image">
                        <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2021/07/large-cat-breeds-cat.jpg?fit=728%2C524" alt="test" />
                    </div>
                    <div className="divider"></div>
                    <div className="card-content">
                        <span className="card-title">Project1 SPAN</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eligendi dolorem esse voluptates, accusantium, in ullam saepe repellat perspiciatis sequi incidunt numquam placeat eaque quo vel! Labore officiis suscipit facilis.</p>
                    </div>
                    <div className="card-action">
                        <div className="row">
                            <a href="http://www.google.com" target="_blank" rel="noreferrer" className="btn red darken-4">
                                Github
                            </a>
                            <a href="http://www.google.com" target="_blank" rel="noreferrer" className="btn red darken-4">
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
                <h3>Project 1</h3>
                <div className="card">
                    <div className="card-image">
                        <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2021/07/large-cat-breeds-cat.jpg?fit=728%2C524" alt="test" />
                    </div>
                    <div className="divider"></div>
                    <div className="card-content">
                        <span className="card-title">Project1 SPAN</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eligendi dolorem esse voluptates, accusantium, in ullam saepe repellat perspiciatis sequi incidunt numquam placeat eaque quo vel! Labore officiis suscipit facilis.</p>
                    </div>
                    <div className="card-action">
                        <div className="row">
                            <a href="http://www.google.com" target="_blank" rel="noreferrer" className="btn red darken-4">
                                Github
                            </a>
                            <a href="http://www.google.com" target="_blank" rel="noreferrer" className="btn red darken-4">
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
                <h3>Project 3: CRM</h3>
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
        </div>
        </StyledProjects>
        </>
    )
}

export default Projects