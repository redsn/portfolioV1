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
    </div>
  );
}

export default App;
