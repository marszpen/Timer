import { useState,useEffect } from 'react';
import Button from '../Buttons/Buttons';
import styles from './Timer.module.scss';


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
  <Button>START</Button>
  <Button>STOP</Button>
  <Button>RESET</Button>
  {time};
</form>
);
};

export default Stoper