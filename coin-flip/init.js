const flipToggle = document.getElementById('flipToggle');
const coinFlipper = document.getElementById('coin-flipper');
let isFlipping = false;

flipToggle.addEventListener('change', flipACoin);

function flipACoin() {
  if (isFlipping || !flipToggle.checked) return;

  isFlipping = true;

  let flipCount = Math.floor(Math.random() * 5) + 1;
  let isHeads = Math.random() > 0.5;
  let totalDegrees = flipCount * 360 + (isHeads ? 0 : 180); 

  coinFlipper.style.transform = `rotateY(${totalDegrees}deg)`;

  setTimeout(() => {
    isFlipping = false;
    flipToggle.checked = false;
    flipToggle.setAttribute('aria-label', isHeads ? 'Landed on heads' : 'Landed on tails');
  }, 1000);
}
