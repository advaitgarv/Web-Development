const pads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

pads.forEach(function (pad) {
  pad.addEventListener('click', function () {
    playSound(pad.innerText, pad.id);
  });
});

document.addEventListener('keydown', function (e) {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);

  if (audio) {
    const pad = audio.parentElement;
    playSound(key, pad.id);
  }
});

function playSound(key, name) {
  const audio = document.getElementById(key);
  audio.currentTime = 0;
  audio.play();
  display.innerText = name;
}