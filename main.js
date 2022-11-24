const audio = document.querySelector("#audio");
const info = document.querySelector("#info");

document.addEventListener('click', play);

function play() {
  if (audio.paused) {
    audio.play();
    info.style.visibility = "hidden";
  } else {
    audio.pause();
    info.style.visibility = "visible";
  }
}
