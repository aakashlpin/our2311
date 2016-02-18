(function () {
  function format (num) {
    if (num < 10) {
      return '0' + num;
    }

    return num;
  }

  function eta () {
    var date_future = new Date('Nov 23 2016 00:00:00');
    var date_now = new Date();

    // get total seconds between the times
    var delta = Math.abs(date_future - date_now) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = delta % 60;  // in theory the modulus is not required

    return {
      days: format(days),
      hours: format(hours),
      minutes: format(minutes),
      seconds: format(parseInt(seconds))
    };
  }

  var days = document.querySelector('#days');
  var hours = document.querySelector('#hours');
  var minutes = document.querySelector('#minutes');
  var seconds = document.querySelector('#seconds');

  setInterval(function () {
    var e = eta();
    days.textContent = e.days;
    hours.textContent = e.hours;
    minutes.textContent = e.minutes;
    seconds.textContent = e.seconds;
  }, 1);
})();
