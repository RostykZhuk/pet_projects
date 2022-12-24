const newYear = '2 Feb 2023';
const daysId = document.getElementById('days');
const hoursId = document.getElementById('hours');
const minutesId = document.getElementById('minutes');
const secondsId = document.getElementById('seconds');

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const total_sec = new Date(newYearDate - currentDate) / 1000;
  const days = Math.floor(total_sec / 3600 / 24);
  const hours = Math.floor(total_sec / 3600) % 24;
  const minutes = Math.floor(total_sec / 60) % 60;
  const seconds = Math.floor(total_sec % 60);

  daysId.innerHTML = formatTime(days);
  hoursId.innerHTML = formatTime(hours);
  minutesId.innerHTML = formatTime(minutes);
  secondsId.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(countdown, 1000);
countdown();
