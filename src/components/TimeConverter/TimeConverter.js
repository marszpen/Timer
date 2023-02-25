const TimeConverter = (props) => {
    const msToTime = (milliseconds) => {
      const ms = Math.floor((milliseconds % 1000) / 100);
      const seconds = Math.floor((milliseconds / 1000) % 60);
      const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
      const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes +  ":" + seconds + "." + milliseconds;
  }
  console.log(msToTime(300000))}


  export default TimeConverter;