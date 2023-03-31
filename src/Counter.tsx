import React, { ReactElement, useState } from 'react';
import './Counter.css';
import { count } from './count';
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

  setTimeout(() => {
    fetchApi().then((_) => {
      setDate(_)
    })
  }, 30000)

  if (dateString === "") return <div/>

  return (
    // eslint-disable-next-line
    <_Counter dateString={dateString}/>
  )
}

const _Counter = ({dateString}): ReactElement => {

  // let countResult = count(dateString)
  const [countResult, setCountResult] = useState(count(dateString))

  setTimeout(() => {
    setCountResult(count(dateString))
  }, 50)

  // Loading icon or animation would be interesting

  if (countResult.get('ferias')) {
    return (
      <FeriasCounter />
    )
  }

  if (countResult.get('days') === 0) {
    return (
      <HoursCounter
        countResult={countResult}
      />
    )
  }

  return (
    <DaysCounter
      countResult={countResult}
    />
  );
}

const HoursCounter = (props: {countResult: Map<string, any>}) => {
  return (
    <div className='counterContainer'>
      <div className='line'>
        <div className='timeContent timeDescription'>
          horas
        </div>
        <div className='timeContent'>
        </div>
        <div className='timeContent timeDescription'>
          minutos
        </div>
        <div className='timeContent'>
        </div>
        <div className='timeContent timeDescription'>
          segundos
        </div>
      </div>

      <div
        className='line'
        style={{paddingTop: '2vw'}} 
      >
        <div className='timeContent time'>
          {props.countResult.get('hours')}
        </div>
        <div className='timeContent time'>:
        </div>
        <div className='timeContent time'>
          {props.countResult.get('minutes')}
        </div>
        <div className='timeContent time'>:
        </div>
        <div className='timeContent time'>
          {props.countResult.get('seconds')}
        </div>
      </div>
    </div>
  )
}

const DaysCounter = (props: {countResult: Map<string, any>}) => {
  return (
    <div className='counterContainer'>
      <div className='line'>
        <div className='days'>
          {props.countResult.get("days")} dias
        </div>
      </div>
    </div>
  )
}

const FeriasCounter = () => {
  return (
    <div className='counterContainer'>
      <div className='line'>
        <div className='ferias'>
          FÉRIAS
        </div>
      </div>
    </div>
  )
}

export const MiddleScreenCounter = () => {
  return (
    <div className='middle-screen'>
      <Counter/>
    </div>
  )
}


