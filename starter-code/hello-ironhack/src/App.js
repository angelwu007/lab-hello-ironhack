import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Icons from './icons.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className='container'>

            <nav>
              <img src="images/ironhack-logo.svg"  alt="logo" />
              <img src ='images/menu-top.svg'/>
            </nav> 
              {/* <img src = "images/react-logo.svg" /> */}
              <div className="content">
                  <h1>Say hello to <br /> ReactJS</h1>
                  <p>
                    You will learn  a Frontend <br />
                    framework from scratch, to <br />
                    become an Ninka Developer.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Awesome!
                  </a>
              </div>
          </div>

        </header>
          <Icons />
      </div>
    );
  }
}

export default App;
