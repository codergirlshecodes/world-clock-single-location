document.addEventListener('DOMContentLoaded', function() {
  const defaultCity = 'Miami';

  function updateDateTime(city) {
    let newYorkTime = moment().tz('America/New_York');
    let cityTime;

    switch (city) {
      case 'Miami':
        cityTime = newYorkTime.clone().tz('America/New_York');
        break;
      case 'Austin':
        cityTime = newYorkTime.clone().tz('America/Chicago');
        break;
      case 'Charlotte':
        cityTime = newYorkTime.clone().tz('America/New_York');
        break;
      case 'Seattle':
        cityTime = newYorkTime.clone().tz('America/Los_Angeles');
        break;
      default:
        cityTime = newYorkTime.clone();
    }

    const dateElement = document.getElementById(`${city}Date`);
    const timeElement = document.getElementById(`${city}Time`);

    dateElement.textContent = cityTime.format('MMMM Do, YYYY');
    timeElement.textContent = cityTime.format('h:mm:ss A');
  }

  
  let today = moment();
  document.getElementById(`${defaultCity}Date`).textContent = today.format('MMMM Do, YYYY');
  document.getElementById(`${defaultCity}Time`).textContent = today.format('h:mm:ss A');

  setInterval(function() {
   
    updateDateTime('Austin');
    updateDateTime('Charlotte');
    updateDateTime('Miami');
    updateDateTime('Seattle');


    today = moment();
    document.getElementById(`${defaultCity}Date`).textContent = today.format('MMMM Do, YYYY');
    document.getElementById(`${defaultCity}Time`).textContent = today.format('h:mm:ss A');
  }, 5000);
});
