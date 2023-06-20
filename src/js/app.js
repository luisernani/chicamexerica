window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.screenY || document.documentElement.scrollTop;

    if(scrollPosition > 0){
        navbar.classList.add('shrink');
    }else{
        navbar.classList.remove('shrink');
    }
});


// Change Text ---------------
const listItems = document.querySelectorAll('.change-text-spam');
const fontColor = ['#EB5353', '#36AE7C', '#F9D923']
let currentIndex = 0;


let lastColorIndex = -1; 

function getColorIndex() {
  let colorIndex;

  do {
    colorIndex = Math.floor(Math.random() * 3);
  } while (colorIndex === lastColorIndex);

  lastColorIndex = colorIndex;
  return colorIndex;
}


function changeText() {
    let previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % listItems.length;
    
    let colorIndex = getColorIndex();
    listItems[previousIndex].classList.remove('active');
    listItems[currentIndex].classList.add('active');

    listItems[currentIndex].style.color = fontColor[colorIndex];


}
setInterval(changeText, 2500); // Change text every 3 seconds
