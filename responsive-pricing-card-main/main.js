
var closeBtn = document.querySelector('.close-btn');
var closeBtn1 = document.querySelector('.close-btn1');
var reserv_show = document.querySelector('.reserv_now');
var reserv_show1 = document.querySelector('.reserv_now1');

var reserv1 = document.querySelector(".reserv-popup1");
var reserv2 = document.querySelector(".reserv-popup2");
var reserv3 = document.querySelector(".reserv-popup3");
var reserv4 = document.querySelector(".reserv-popup4");
var start = document.querySelector(".start-btn");

reserv1.addEventListener('click', popUp);
reserv2.addEventListener('click', popUp);
reserv3.addEventListener('click', popUp);
reserv4.addEventListener('click', popUp);
start.addEventListener('click',()=>{
    reserv_show1.style.transform = "scale(1)";
});


function popUp() {
    reserv_show.style.transform = "scale(1)";
}

closeBtn.addEventListener('click', ()=>{
    reserv_show.style.transform = "scale(0)";
    
})
closeBtn1.addEventListener('click', ()=>{
    reserv_show1.style.transform = "scale(0)";
    
})