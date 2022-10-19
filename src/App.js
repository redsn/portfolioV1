//===
// Imports
//===

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

//==
// Imported Components
//==

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//===
// Main Function
//===

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='body-content'>
        {/* <h1>Placeholder in App.js</h1> */}
        <Main/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
