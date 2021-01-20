let slidecontainer = document.getElementById("slider-container");
let slideall = document.querySelectorAll("#slider-container ul li");
let slideul = document.querySelector("#slider-container ul");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slidesheet; // スライドの枚数
let slidecount;
let slidecopy;
let slidescore = 1;
let clonescore = 0;
let distance = 0;
let slidewidth = slidecontainer.clientWidth;
let slideinterval;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    slidesheet = slideall.length;
    slidecopy = slideall[clonescore].cloneNode(true);
    slideul.appendChild(slidecopy);
  },
  false
);

next.addEventListener(
  "click",
  function () {
    slidewidth = slidecontainer.clientWidth;

    slideall = document.querySelectorAll("#slider-container ul li");

    slideinterval = setInterval(() => {
      if (distance < slidewidth * slidescore) {
        distance = distance + 30;

        slideul.style.marginLeft = -distance + "px";
      } else {
        clearInterval(slideinterval);
        slidescore++;

        if (slidescore === slidesheet + 1) {
          slidescore = 1;
          slideul.style.marginLeft = 0 + "px";
          distance = 0;
        } else {
        }
      }
    }, 10);
  },
  false
);

prev.addEventListener("click", function () {
  slidewidth = slidecontainer.clientWidth;

  if (slidescore === 1) {
    distance = slidewidth * slidesheet;
    slideul.style.marginLeft = -(slidesheet * slidewidth) + "px";
    slidescore = slidesheet;
  } else {
    slidescore--;
  }

  slideinterval = setInterval(() => {
    if (distance > slidewidth * (slidescore - 1)) {
      distance = distance - 30;
      slideul.style.marginLeft = -distance + "px";
    } else {
      clearInterval(slideinterval);
    }
  }, 10);
});
