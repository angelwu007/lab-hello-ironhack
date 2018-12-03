import React from 'react';


class Icons extends React.Component{
    
render(){

    
    return(

        <div className='container icon-box'>
          <div>
            <img src='images/icon1.png' alt="logo" />
            <h2> Declarative</h2>
            <h4> React makes it painless to create interactive UIs.</h4>
          </div>
          <div>
            <img src='images/icon2.png' alt="logo" />
            <h2> Components</h2>
            <h4> Build encapsulated components that manage their state.</h4>


          </div>
          <div>
            <img src='images/icon3.png' alt="logo" />
            <h2> Single-Way</h2>
            <h4> A set of immutable values are passed to the components.</h4>


          </div>
          <div>
             <img src='images/icon4.png' alt="logo" />
             <h2> JSX</h2>
             <h4> Statically-typed, designed to run on modern browsers.</h4>
          </div>

        </div>
    );

    }

}

export default Icons