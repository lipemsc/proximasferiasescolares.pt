import React, { ReactElement, useState } from 'react';
import './Counter.css';
import count from './count';
import axios from 'axios';

const fetchApi = async () => {
  return (await axios.get("https://api.proximasferiasescolares.pt/")).data
}

export const Counter = (): ReactElement => {
  
  let [dateString, setDate] = useState("")

  if (dateString === "")
    fetchApi().then((_) => {
      setDate(_)
    })

  setInterval(() => {
    fetchApi().then((_) => {
      setDate(_)
    })
  }, 30000)

  if (dateString === "") return <div/>

  return (
    <_Counter dateString={dateString}/>
  )
}

const _Counter = ({dateString}): ReactElement => {

  // let countResult = count(dateString)
  const [countResult, setCountResult] = useState(count(dateString))

  setInterval(() => {
    setCountResult(count(dateString))
  }, 50)

  // Loading icon or animation would be interesting

  return (
    <div className='counterContainer'>
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

      <div
        className='line'
        style={{paddingTop: '2vw'}} 
      >
        <div className='content time left'>
          {countResult['hours']}
        </div>
        <div className='content time'>:
        </div>
        <div className='content time'>
          {countResult['minutes']}
        </div>
        <div className='content time'>:
        </div>
        <div className='content time right'>
          {countResult['seconds']}
        </div>
      </div>
    </div>
  );
}


export const MiddleScreenCounter = ({dateString}) => {
  return (
    <div className='middle-screen'>
      <Counter/>
    </div>
  )
}

