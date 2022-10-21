//===
// Imports
//===

import React from 'react';
import {Link} from 'react-router-dom';

//===
// Component
//===

const Header = () => {
    return(
        <>
            <div className="row black white-text mainnav">
                <Link to='/'>
                <h2 className="titlehead">Terrence Luk : Software Developer</h2>
                </Link>
                    <div className="col s4 red darken-4">
                        <Link to='projects'>
                            <div className="navlinks">
                            Projects
                            </div>
                        </Link>
                    </div>
                    <div className="col s4 red darken-4">
                        <a href="https://github.com/redsn" target="_blank" rel='noreferrer'>
                            <div className="navlinks">
                                Github
                            </div>
                        </a>
                    </div>
                    <div className="col s4 red darken-4">
                        <Link to='about'>
                            <div className="navlinks">
                            About
                            </div>
                        </Link>
                    </div>
            </div>
        </>
    )
}

export default Header;