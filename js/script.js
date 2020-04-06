function popupCovid() {
  let covid = document.getElementById('popup-covid');
  let covid_close = document.getElementById('popup-covid__close');

  setTimeout(function() {
    covid.style.visibility = 'visible';
    covid.style.opacity = 1;
    covid.style.transition = 'all 1s';
  }, 5000);
  covid_close.addEventListener('click', function() {
    covid.style.visibility = 'hidden';
    covid.style.opacity = 0;
  });
}

function menuNavigation() {
  let radio = document.getElementById('navi-toggle');
  radio.checked = false;
}
popupCovid();
menuNavigation();
