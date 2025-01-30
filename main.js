onload = () => {
  document.body.classList.remove("container");
};

window.addEventListener("load", () => {
  const audio = document.getElementById("myAudio");
  audio.muted = false;

  const lyrics = document.getElementById("lyrics");

  const lyricsData = [
    { text: "PORQUE AMO LA MANERA EN LA QUE RIES", time: 5000 },
    { text: "Y AMO LAS COSAS TONTAS QUE ME DICES", time: 5000 },
    { text: "Y CUALQUIER COMENTARIO MALO QUE ME HAGAN SOBRE TI", time: 5000 },
    { text: "SERA IGNORADO...... PORQUE MI CORAZON ES TUYO", time: 5000 },
    { text: "ASI QUE NO TE PREOCUPES POR NADA", time: 5000 },
    {
      text: "LA GENTE SIEMPRE QUIERE ARRUINAR LAS COSAS QUE BRILLAN",
      time: 5000,
    },
    { text: "Y LA VIDA HACE QUE EL AMOR PAREZCA DIFICIL", time: 5000 },
    { text: "NO TE PREOCUPES POR NADA", time: 5000 },
    {
      text: "LA GENTE SIEMPRE QUIERE ARRUINAR LAS COSAS QUE BRILLAN",
      time: 5000,
    },
    { text: "PERO YO SIEMPRE TE ELIGIRE A TI", time: 5000 },
    { text: "YO SIEMPRE TE ELIGIRE A TI♡", time: 5000 },
    { text: "LOS RIESGOS SON ALTOS... EL AGUA TURBULENTA", time: 5000 },
    { text: "PERO ESTE AMOR ES NUESTRO♡♡", time: 5000 },
    { text: "¡TE AMOOOOOOOOOOO!", time: 5000 },
  ];

  function displayLyrics(index) {
    if (index < lyricsData.length) {
      lyrics.textContent = lyricsData[index].text;
      setTimeout(() => displayLyrics(index + 1), lyricsData[index].time);
    }
  }

  displayLyrics(0);
});

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "audio.mp3";
  audio.autoplay = true;
  document.body.appendChild(audio);
});
