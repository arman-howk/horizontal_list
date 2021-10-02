const parent = document.querySelector(".parent");
const child = document.querySelectorAll(".child");
const child1 = document.querySelector(".child-1");
const leftBtn = document.querySelector(".left-Btn");
const rightBtn = document.querySelector(".right-btn");
const display = document.querySelector(".display");

let x = 0;
let cardCount = child.length-1;
let cardWidth = child1.offsetWidth-8;
let maxScroll = (cardCount*cardWidth);


//this code works on left/right buttons

rightBtn.addEventListener("click", function() {
    if(x < maxScroll){
        x += 1000;
        parent.scrollTo(x, 0);
        
    }
    display.textContent = x;
    display.textContent = (cardWidth * cardCount);
});


leftBtn.addEventListener("click", function() {
    if(x > 0){
        x -= 1000;
        parent.scrollTo(x, 0);
    }
    
    display.textContent = x;
    display.textContent = (cardWidth*cardCount);
})



//the code belove works on mouse wheel 

// parent.addEventListener("mousewheel",function(e) {
//     if(x < cardCount*cardWidth && e.deltaY > 0){
//         x += 50;
//         parent.scrollTo(x, 0);
//     } else if (x !== 0 && e.deltaY < 0){
//         x -= 50;
//         parent.scrollTo(x, 0);
//     }
    

//     display.textContent = `${"mousewheel"} _ ${cardCount}_ ${cardWidth}
//     _ ${cardCount * cardWidth}_ ${e.deltaY}_ ${x}`
// })