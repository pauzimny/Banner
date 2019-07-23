import "../src/style.css";
const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

const slideList = [
  {
    img: "images/img1.png",
    text: "First banner info"
  },
  { img: "images/img2.png", text: "Second banner info" },
  { img: "images/img3.png", text: "Third banner info" }
];

const time = 4000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};

let intervalIndex = setInterval(changeSlide, time);

const keyChangeSlide = e => {
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(intervalIndex);
    e.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    intervalIndex = setInterval(changeSlide, time);
  }
};

window.addEventListener("keydown", keyChangeSlide);
