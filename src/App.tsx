import React from 'react';
import './App.css';
import { storage } from './firebase'; //🔥

/** Import Components **/
import Divider from './components/Divider';
import Movie from './components/Movie';
import Sidenote from './components/Sidenote';
import NeonButton from './components/NeonButton';

//simulate fetching movie data
import { getMovies } from './api/movies';
import ImageUpload from './components/ImageUpload';

export type MovieType = {
    id: string;
    title: string;
    posterSrc: string;
    synopsis: string;
    rating: number;
};

const App = () => {
  const movies: MovieType[] = getMovies();
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
            <Sidenote type='error' title='Error occurred!' expand>
              <p>Yay reusability!</p>
            </Sidenote>
            <Sidenote type='tiedye' title='oh em gee itz tiedye!'>
              <p>Yay tiedye!</p>
            </Sidenote>
          </div>
        </section>

        <Divider/>

        {/* MOVIE COMPONENT */}
        <section className='component-section'>
          <div className='component-title'>{`<Movie />`}</div>
          <div className='component-wrapper'>
            {movies.map((movie: MovieType) => (<Movie key={movie.id} movie={movie}/>))}
          </div>
        </section>

        <Divider/>

        {/* IMAGE/FILE UPLOAD COMPONENT */}
        <section className='component-section'>
          <Sidenote type='notice' title='Uploading is currently disabled!' expand>
              <p>Example images uploaded using component</p>
          </Sidenote>
          <div className='component-title'>{`<ImageUpload />`}</div>
          <div className='component-wrapper'>
            <ImageUpload storage={storage} />
          </div>
        </section>

        <Divider/>

        {/* NEON BUTTON COMPONENT */}
        <section className='component-section'>
          <div className='component-title'>{`<NeonButton />`}</div>
          <div className='component-wrapper'>
            <NeonButton label='Neon Btn' onClick={() => console.log('<NeonButton/> clicked!')} />
          </div>
        </section>

        <Divider/>

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
