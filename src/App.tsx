import React from 'react';
import './App.css';
import Sidenote from './components/Sidenote';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-title'>Components</div>
      </header>
      <div className='App-body'>
        {/* TODO / Early gameplan/pseudo code for how to display each component
         A grid that has a small clickable image of the component
         When clicked on: navigates to an example of component with code that can be copied
        */}

        {/* SIDENOTE COMPONENT */}
        <section className='component-section'>
          <div className='component-title'>Sidenote</div>
          <div className='component-wrapper'>
            <Sidenote type="notice" title="Sidenote Notice...">
              <p>Hello World</p>
            </Sidenote>
            <Sidenote type="success" title="Sidenote Success!">
              <p>Muchness of success</p>
            </Sidenote>
            <Sidenote type="warning" title="This is a warning!">
              <>
                <p><strong id='never-say-never'>Never Say Never</strong></p>
                <p>In this example, we're using lyrics to elevate our <strong>wellbeing!</strong></p>
              </>
            </Sidenote>
            <Sidenote type="error" title="Error occurred!">
              <p>Yay reusability!</p>
            </Sidenote>
          </div>
        </section>

        {/* FUTURE COMPONENT */}
        <section className='component-section'>
          <div className='component-title'>Future</div>
          <div className='component-wrapper'>
            <p style={{ color: 'aliceblue' }}>Placeholder for <code>{'<FutureComponent/>'}</code> example section</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
