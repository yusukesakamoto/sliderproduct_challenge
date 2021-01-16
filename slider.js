let slideall = document.querySelectorAll('#slider-container ul li');
let slideul = document.querySelector("#slider-container ul");
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slidecount;
let slidecopy;
let slidescore = 1;
let clonescore = 0;

next.addEventListener('click',function(){

slideall = document.querySelectorAll('#slider-container ul li');

slidecount = slideall.length;
slidecopy = slideall[clonescore].cloneNode(true);
slideul.appendChild(slidecopy);
slideul.style.transform = "translateX(" + -420 * (slidescore) + "px)";
slidescore++;
clonescore++;

console.log(slidescore);
console.log(clonescore);



if(slidescore === 4) {
    slidescore = 1;
    for(var i = 0;i < 3;i++){
        console.log("動いてる");
        slideall = document.querySelectorAll('#slider-container ul li');
        slideall[0].remove();
    }
    slideul.style.transform = "translateX(" + 0 + "px)";
    clonescore = 0;
}

},false);