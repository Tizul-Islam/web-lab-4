var slide = document.querySelector('.slide');
var img = ['a (11).jpg','a (10).jpg','a (9).jpg','a (3).jpg','a (4).jpg','a (6).jpg'];
var i = 0;

// function prev(){

//     if(i <= 0 ) i = img.length;
//     i--;
//     return setImg();
    

// }

// function next(){
//     if(i >= img.length-1) i = - 1;
//     i++;
//     return setImg();


// }


function prev() {
    i = (i - 1 + img.length) % img.length; // Ensure i wraps around correctly
    setImg();
  }
  
  function next() {
    i = (i + 1) % img.length; // Ensure i wraps around correctly
    setImg();
  }

function setImg(){

return slide.setAttribute('src', 'img/'+img[i]);

}



// const slide = document.querySelector('.slide');
// const img = ['a(1).jpg', 'a(2).jpg', 'a(3).jpg', 'a(4).jpg', 'a(5).jpg', 'a(6).jpg'];
// let i = 0;

// function prev() {
//   i = (i - 1 + img.length) % img.length; // Ensure i wraps around correctly
//   setImg();
// }

// function next() {
//   i = (i + 1) % img.length; // Ensure i wraps around correctly
//   setImg();
// }

// function setImg() {
//   slide.setAttribute('src', 'img/' + img[i]);
// }



/* /follower mouse/  */
const circle = document.querySelector(".circle")
const circle2 = document.querySelector(".circle2")
document.addEventListener("mousemove",function(e){

    circle.style.cssText = circle2.style.cssText = "left: " + e.clientX + "px; top: " +e.clientY + "px;";

})



/* /button animation/  */

const buttons = document.querySelectorAll('button')
buttons.forEach(btn =>{

    btn.addEventListener('click',function(e){
let x= e.clientX - e.target.offsetLeft;
let y= e.clientY - e.target.offsetTop;

let ripples = document.createElement('span');

ripples.style.left = x + 'px';
ripples.style.top = y + 'px';

this.appendChild(ripples);

    })

})
setTimeout(() => {
    ripples.remove()
},1000);



/* slide-toggle */

$(document).ready(function(){
    $(".slide-toggle").click(function(){
        $(".box").animate({
            width: "toggle"
        });
    });
});




