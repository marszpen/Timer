import { useState,useEffect } from 'react';
import Button from '../Buttons/Buttons';
import styles from './Timer.module.scss';
import TimeConverter from '../TimeConverter/TimeConverter.js'


const Stoper = props => {

  const [time,setTime] = useState (0);
  const [timer,setTimer] = useState (null);

  useEffect(() => {
    const interval = setInterval (()=> {
        setTime (time => time + 100)
    }, 100);
    setTimer (interval)
    return () => {
      clearInterval(interval)
    };
  }, []);

  

return ( 
<form className={styles.stoper}>
  <div className={styles.div}>
  <TimeConverter time={time} />
  </div>
  <div className={styles.div}>
  <Button>START</Button>
  <Button>STOP</Button>
  <Button>RESET</Button>
  </div>
</form>
);
};

export default Stoper