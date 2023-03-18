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

        {/* SIDENOTE COMPONENT */}
        <section className='component-section'>
          <div className='component-title'>{`<Sidenote />`}</div>
          <div className='component-wrapper'>
            <Sidenote type='notice' title='Sidenote Notice...'>
              <p>Hello World</p>
            </Sidenote>
            <Sidenote type='success' title='Sidenote Success!' expand>
              <p>Muchness of success</p>
              <p>click to expand</p>
            </Sidenote>
            <Sidenote type='warning' title='This is a warning!'>
              <>
                <p><strong id='never-say-never'>Never Say Never</strong></p>
                <p>In this example, we're using lyrics to elevate our <strong>wellbeing!</strong></p>
              </>
            </Sidenote>
            <Sidenote type='error' title='Error occurred!'>
              <p>Yay reusability!</p>
            </Sidenote>
            <Sidenote type='tiedye' title='oh em gee itz tiedye!' expand>
              <p>Yay tiedye!</p>
            </Sidenote>
          </div>
        </section>

        {/* FUTURE COMPONENT */}
        <section className='component-section'>
          <div className='component-title'>{`<Future />`}</div>
          <div className='component-wrapper'>
            <p style={{ color: 'aliceblue' }}>Placeholder for <code style= {{ color: 'mediumspringgreen' }}>{'<FutureComponent/>'}</code> example section</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
