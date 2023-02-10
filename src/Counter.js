import React from 'react';
import './Counter.css';
import count from './count';


class Counter extends React.Component {
  
  counterHeader = () => {
    return (
      <div className='line'>
        <div className='content description left'>
          horas
        </div>
        <div className='content'>
        </div>
        <div className='content description'>
          minutos
        </div>
        <div className='content'>
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
        className='line'
        style={{paddingTop: '2vw'}} 
      >
        <div className='content time left'>
          {this.countResult['hours']}
        </div>
        <div className='content time'>:
        </div>
        <div className='content time'>
          {this.countResult['minutes']}
        </div>
        <div className='content time'>:
        </div>
        <div className='content time right'>
          {this.countResult['seconds']}
        </div>
      </div>
    )
  }

  render = () => {
    // Loading icon or animation would be interesting
    if (this.props.dateString === "") return false

    this.countResult = count(this.props.dateString)
    const header = this.counterHeader()
    const counter = this.counter()

    return (
      <div className='counterContainer'>
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
        <Counter dateString = {this.props.dateString} />
      </div>
    )
  }
}


export {Counter, MiddleScreenCounter}
