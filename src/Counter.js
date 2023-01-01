import React from 'react';
import './Counter.css';
import count from './counters/1';


class Counter extends React.Component {
  countResult = count();
  
  counterHeader = () => {
    return (
      <div className='align'>
        <div className='content description left'>
          horas
        </div>
        <div className='content description'>
          minutos
        </div>
        <div className='content description right'>
          segundos
        </div>
      </div>
    )
  }

  counter = () => {
    return (
      <div
        className='align'
        style={{paddingTop: '2vw'}} 
      >
        <div className='content time left'>
          {this.countResult['hours']}
        </div>
        <div className='content time'>
          {this.countResult['minutes']}
        </div>
        <div className='content time right'>
          {this.countResult['seconds']}
        </div>
      </div>
    )
  }

  render = () => {
    this.countResult = count();
    const header = this.counterHeader()
    const counter = this.counter()

    return (
      <div style={{display: "table"}}>
        {header}
        {counter}
      </div>
    );
  }
}

class MiddleScreenCounter extends React.Component {
  render = () => {
    return (
      <div className='middle-screen'>
        <Counter />
      </div>
    )
  }
}


export {Counter, MiddleScreenCounter}
