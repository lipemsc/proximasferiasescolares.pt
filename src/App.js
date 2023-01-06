import React from 'react';
import './App.css';
import { Counter, MiddleScreenCounter } from './Counter';

class App extends React.Component {
  
  Mid = Counter.in

  render = () => {
    return (
      <div className='background'>
        <div className='backgroundFilter'>
          <MiddleScreenCounter />
        </div>
      </div>
    );
  }
}



export default App;
