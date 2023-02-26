const cardContainer = document.querySelector(".cardContainer");
const slides = document.querySelectorAll(".slides");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let counter = 1;
const size = slides[0].clientWidth;

cardContainer.style.transform = "translateX(" + -size * counter + "px";
next.addEventListener("click", () => {
  if (counter >= slides.length) return;
  cardContainer.style.transition = "transform 0.4s ease-in-out";
  counter++;
  cardContainer.style.transform = "translateX(" + -size * counter + "px";
});

prev.addEventListener("click", () => {
  if (counter <= 0) return;
  cardContainer.style.transition = "transform 0.4s ease-in-out";
  counter--;
  cardContainer.style.transform = "translateX(" + -size * counter + "px";
});

cardContainer.addEventListener("transitionend", () => {
  console.log(slides[counter]);
  if (slides[counter].id === "lastslide") {
    cardContainer.style.transition = "none";
    counter = slides.length - 2;
    cardContainer.style.transform = "translateX(" + -size * counter + "px";
  }
});

cardContainer.addEventListener("transitionend", () => {
  console.log(slides[counter]);
  if (slides[counter].id === "firstslide") {
    cardContainer.style.transition = "none";
    counter = slides.length - counter;
    cardContainer.style.transform = "translateX(" + -size * counter + "px";
  }
});
