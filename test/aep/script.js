const dot = document.querySelector("#dot");
let targetX = 0;
let targetY = 0;

document.addEventListener("mousemove", (event) => {
  targetX = event.pageX - 12.5;
  targetY = event.pageY - 12.5;
});

setInterval(() => {
  dot.style.left = (dot.offsetLeft + (targetX - dot.offsetLeft) * 0.1) + "px";
  dot.style.top = (dot.offsetTop + (targetY - dot.offsetTop) * 0.1) + "px";

  dot.style.pointerEvents = "none";
  dot.style.opacity = "0.5";
}, 20);

dot.addEventListener("click", () => {
  dot.style.transform = "scale(1.5)";
});

dot.addEventListener("transitionend", () => {
  dot.style.transform = "scale(1)";
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest("a, button, input, [role='button']")) {
    dot.style.pointerEvents = "auto";
    target.click();
    setTimeout(() => {
      dot.style.pointerEvents = "none";
    }, 0);
  }
});
