const TimeConverter = (props) => {
    const milliseconds = props.time;
      let ms = Math.floor((milliseconds % 1000) / 100);
      let seconds = Math.floor((milliseconds / 1000) % 60);
      let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
      let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return (<span> {hours + ":" + minutes +  ":" + seconds } </span>);

}
  export default TimeConverter;