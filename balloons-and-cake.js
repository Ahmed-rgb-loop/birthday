// Balloons Animation
const balloonColors = ['#ff6f61', '#ffd700', '#00bfff', '#ff1493', '#32cd32'];
const balloonContainer = document.getElementById('balloon-container');

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 5 + Math.random() * 3 + 's';  // Random speed for each balloon
  balloonContainer.appendChild(balloon);

  // Remove balloon after it floats out of view
  balloon.addEventListener('animationend', () => {
    balloonContainer.removeChild(balloon);
  });
}

// Generate balloons at intervals
setInterval(createBalloon, 800);

// Cake Animation - The cake floats automatically due to CSS keyframes
