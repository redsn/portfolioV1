//===
// Imports
//===

import React from 'react';
import {Routes, Route} from 'react-router-dom';

//==
// Imported Pages
//==

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';

//===
// Component
//===

const Main = () => {
    return(
        <>
        <div className="container">

        <Routes>

            <Route
                path='/'
                element={<Home />}
                />

            <Route
                path='/about'
                element={<About />}
                />

            <Route
                path='/projects'
                element={<Projects />}
                />

            <Route
                path='*'
                element={<Home />}
                />

        </Routes>
        </div>
        </>
    )
}

export default Main;