import React from 'react';
import './App.css';
import { MiddleScreenCounter } from './Counter';
import Title from './Title';

class App extends React.Component {

  render = () => {
    return (
      <div className='background'>
        <div className='backgroundFilter'>
          <Title />
          <MiddleScreenCounter />
        </div>
      </div>
    );
  }
}



export default App;
