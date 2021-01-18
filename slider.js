let slideall = document.querySelectorAll('#slider-container ul li');
let slideul = document.querySelector("#slider-container ul");
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slidecount;
let slidecopy;
let slidescore = 1;
let clonescore = 0;
let distance = 0;

let slideinterval;

next.addEventListener('click',function(){

slideall = document.querySelectorAll('#slider-container ul li');

slideinterval =
setInterval(() => {
    if(distance < 420 * slidescore) {

        distance = distance + 20;

        slideul.style.marginLeft = -(distance) + "px";
    } else {
        clearInterval(slideinterval);
        slidescore++;

        if(slidescore === 4) {
            slidescore = 1;
            slideul.style.marginLeft = 0 + "px";
            distance = 0;
    } else {
        
    }
    }
}, 5);

},false);

prev.addEventListener('click',function(){
    if(slidescore === 1) {
        distance = 420 * 3;
        slideul.style.marginLeft = -(3 * 420) + "px";
        slidescore = 3;
    } else {
        slidescore--;
    }

        slideinterval = setInterval(() => {
            if(distance > 420 * (slidescore - 1 )) {
                distance = distance - 20;
                slideul.style.marginLeft = -(distance) + "px";
            }
        }, 5); 
    

});