import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  

  render = () => {
    return (
      <div className='background'>
        <Counter />
      </div>
    );
  }
}



export default App;
