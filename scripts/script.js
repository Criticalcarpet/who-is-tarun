import anime from "./anime/lib/anime.es.js";

let disclaimer = document.getElementById("disclaimer");
let info = document.getElementById("info");
let body = document.getElementById("body");

anime
  .timeline({
    targets: disclaimer,
    endDelay: 400,
    easing: "linear",
  })
  .add({
    scale: 1,
    opacity: [0, 1],
  })
  .add(
    {
      opacity: [1, 0],
      duration: 2000,
      complete: () => {
        disclaimer.textContent =
          "Please rotate your phone and turn up your volume for better experience";
      },
    },
    "+=1000"
  )
  .add(
    {
      opacity: [0, 1],
    },
    "+=1000"
  )
  .add(
    {
      opacity: [1, 0],
      complete: () => {
        disclaimer.textContent = "LET'S BEGIN !!!";
        disclaimer.style.color = "whitesmoke";
      },
    },
    "+=1000"
  )
  .add({
    targets: "#body",
    background: ["f5f5f5", "#000000"],
    duration: 2000,
  })
  .add({
    opacity: [0, 1],
    rotate: 360,
    ease: "easeOutExpo",
  })
  .add({
    scale: [1, 0],
    complete: () => {
      disclaimer.textContent = "What is TARUN ? 🤔";
      info.style.color = "yellow";
    },
  })
  .add({
    scale: [0, 1],
    translateY: [0, -100],
  })
  .add({
    targets: "#info",
    opacity: [0, 1],
    duration: 2000,
    complete: () => {
      info.textContent = "BOY ? GIRL ? GEH ?!?!?! ";
      info.style.opacity = 0;
    },
  })
  .add({
    targets: "#info",
    opacity: 1,
    rotate: -360,
    complete: () => {
      info.style.opacity = 0;
      info.style.color = "red";
      info.textContent = "WE DON'T KNOW 😱";
      document.getElementById("oh-nah").play();
      setTimeout(() => {
        document.getElementById("oh-nah").pause();
      }, 3000);
    },
  })
  .add({
    targets: "#info",
    opacity: 1,
    translateY: [-20, 0],
  });
