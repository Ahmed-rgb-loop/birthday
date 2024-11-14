const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createFirework(x, y) {
  const particles = [];
  const colors = ['#ff6f61', '#ffd700', '#00bfff', '#ff1493', '#32cd32'];

  for (let i = 0; i < 50; i++) {
    const angle = (Math.PI * 2) * (i / 50);
    const velocity = Math.random() * 4 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push({
      x,
      y,
      dx: Math.cos(angle) * velocity,
      dy: Math.sin(angle) * velocity,
      color,
      life: Math.random() * 30 + 30,
    });
  }
  return particles;
}

let fireworks = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireworks = fireworks.filter(firework => firework.life > 0);

  fireworks.forEach(firework => {
    ctx.fillStyle = firework.color;
    ctx.beginPath();
    ctx.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
    ctx.fill();
    firework.x += firework.dx;
    firework.y += firework.dy;
    firework.dy += 0.02;  // Gravity
    firework.life--;
  });

  requestAnimationFrame(animate);
}

function launchFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  fireworks.push(...createFirework(x, y));
}

setInterval(launchFirework, 500);
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
