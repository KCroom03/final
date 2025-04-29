// main.js
document.addEventListener("DOMContentLoaded", () => {
    const danceElement = document.querySelector(".description r");
    const imageElement = document.querySelector(".overlay-img img");
  
    danceElement.addEventListener("mouseover", () => {
      imageElement.src = "./img/cat.jpg";
    });
  
    danceElement.addEventListener("mouseout", () => {
      imageElement.src = "./img/normaldog.jpg";
    });
  });