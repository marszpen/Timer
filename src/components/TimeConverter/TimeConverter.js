const TimeConverter = (props) => {
    const msToTime = (milliseconds) => {
    const ms = Math.floor((milliseconds % 1000) / 100);
      seconds = Math.floor((miliseconds / 1000) % 60);
      minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
      hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  ś
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
  console.log(msToTime(300000))}


  export default TimeConverter;