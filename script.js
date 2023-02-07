const lines = document.querySelectorAll('.line');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const angle = Math.floor(Math.random() * 360);

  line.style.left = `${x}vw`;
  line.style.top = `${y}vh`;
  line.style.transform = `rotate(${angle}deg)`;
}

setTimeout(() => {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    line.style.left = '50vw';
    line.style.top = '50vh';
    line.style.transform = 'rotate(0)';
  }

  const text = document.createElement('div');
  text.innerHTML = 'NILOTPAL BHARTI';
  text.style.position = 'absolute';
  text.style.left = '50%';
  text.style.top = '50%';
  text.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(text);
}, 4000);
