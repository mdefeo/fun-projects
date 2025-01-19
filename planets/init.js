/*
Please feel free to add to this! 
To do:
- Add rings around planets
- Add moons to planets and rotate them
- Rotate planets on an axis
- Adjust orbit to be elliptical

Images are from NASA's website 

Repo: https://github.com/mdefeo/fun-projects

*/

const starContainer = document.querySelector('.stars');
const starCount = 800;
const sunContainer = document.querySelector('.sun');
const flareCount = 100;

function generateStars() {
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const xPos = Math.random() * 100 + 'vw';
    const yPos = Math.random() * 100 + 'vh';
    star.style.left = xPos;
    star.style.top = yPos;

    const size = Math.random() * 3 + 1 + 'px';
    star.style.width = size;
    star.style.height = size;

    const blinkSpeed = Math.random() * 1 + 1 + 's';
    star.style.animationDuration = blinkSpeed;

    starContainer.appendChild(star);
  }
}

generateStars();


function generateSolarFlares() {
  for (let i = 0; i < flareCount; i++) {
    const flare = document.createElement('div');
    flare.classList.add('solar-flare');

    const size = Math.random() * 8 + 4 + 'px';
    flare.style.width = size;
    flare.style.height = size;

    const xPos = Math.random() * 80 + 10 + '%';
    const yPos = Math.random() * 80 + 10 + '%';
    flare.style.left = xPos;
    flare.style.top = yPos;

    const flareSpeed = Math.random() * 3 + 2 + 's';
    flare.style.animationDuration = flareSpeed;

    sunContainer.appendChild(flare);
  }
}

generateSolarFlares();
