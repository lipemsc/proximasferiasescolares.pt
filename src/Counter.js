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

  render = () => {
    this.countResult = count();
    const header = this.counterHeader()

    return (
      <div>
        {header}
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
      </div>
    );
  }
}



export default Counter;
