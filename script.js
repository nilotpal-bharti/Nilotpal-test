const animated = document.querySelector("#animated");

setInterval(() => {
  const colors = ["blue", "red", "yellow", "green"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  animated.style.backgroundColor = randomColor;
}, 5000);
