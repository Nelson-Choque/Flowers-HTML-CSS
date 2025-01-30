onload = () => {
  document.body.classList.remove("container");
};

window.addEventListener("load", () => {
  const audio = document.getElementById("myAudio");
  audio.muted = false;
});

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "audio.mp3";
  audio.autoplay = true;
  document.body.appendChild(audio);
});
