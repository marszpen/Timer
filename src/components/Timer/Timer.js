import { useState,useEffect } from 'react';
import Button from '../Buttons/Buttons';
import styles from './Timer.module.scss';
import TimeConverter from '../TimeConverter/TimeConverter.js'


const Stoper = props => {

  const [time,setTime] = useState (0);
  const [timer,setTimer] = useState (null);

  const step = () => {
    setTime(time => time + 100)
  }
  
  useEffect(() => {
    const interval = setInterval (step, 100);
    setTimer (interval)
    return () => {
      clearInterval(interval)
    };
  }, []);

  const handleStart = () => {
    if(!timer) {
      const interval = setInterval (step, 100);
      setTimer (interval)
    }
  }
  
  const handleStop = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null)
    }
  }
  
  const handleReset = () => {
    setTime(0);
  }
  
return ( 
  <div>
    <div className={styles.stoper}>
    <TimeConverter time={time} />
    </div>
    <div className={styles.stoper}>
    <Button onClick={handleStart}>START</Button>
    <Button onClick={handleStop}>STOP</Button>
    <Button onClick={handleReset}>RESET</Button>
    </div>
  </div>
  );
};

export default Stoper