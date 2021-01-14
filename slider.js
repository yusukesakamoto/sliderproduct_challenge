let slideall = document.querySelectorAll('#slider-container ul li');
let slideul = document.querySelector("#slider-container ul");
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slidecount;
let slidecopy;
let slidescore = 1;
let clonescore = 0;

next.addEventListener('click',function(){

if(slidescore === 3) {
    slidescore = 0;
}

if(clonescore === 3) {
    clonescore = 0;
}

slidecount = slideall.length;
slidecopy = slideall[clonescore].cloneNode(true);
slideul.appendChild(slidecopy);
slideul.style.transform = "translateX(" + -420 * (slidescore) + "px)";
slidescore++;
clonescore++;
},false);