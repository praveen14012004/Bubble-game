var timer = 60;
var score = 0;
var hitrn = 0;
function totalscore() {
  score += 10;
  document.querySelector("#scoreinterval").textContent = score;
}

function hit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hiteinterval").textContent = hitrn;
}

function makebubble() {
  let clutter = "";
  for (var i = 1; i <= 80; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(" #pbtm ").innerHTML = clutter;
}

function runtimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timer);
      document.querySelector("#pbtm").innerHTML = "<h1> Game Over </h1>";
    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedno = Number(details.target.textContent);
  if (clickedno === hitrn) {
    totalscore();
    hit();
    makebubble();
  }
});

hit();
runtimer();
makebubble();
