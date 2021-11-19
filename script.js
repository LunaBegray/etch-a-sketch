const gridContainer = document.querySelector('.gridContainer');
let wh;
for(i = 0; i < 16*16; i++){
    let box = document.createElement('div');
    box.classList.add("gridBoxes");
    box.addEventListener("mouseover", function(event){
        box.classList.add("touchedBox");
    });
    gridContainer.appendChild(box);
}
let btn = document.querySelector('.btn');
let allBoxes = document.querySelectorAll('.gridBoxes');
btn.addEventListener("click", () => {
    let touchedBoxes = document.querySelectorAll('.touchedBox');
    for(let i =0 ;i < touchedBoxes.length; i++){
        touchedBoxes[i].classList.remove('touchedBox');
    }
    gridContainer.textContent = "";
    let sqPrompt = prompt("enter squares per side you fucker");
    wh = sqPrompt;
    if(wh > 100){
        wh = 100
    }
    let newSize = 960/wh
    for(let i = 0; i < wh*wh; i++){
        let box = document.createElement('div');
        box.classList.add("gridBoxes");
        box.style.width = newSize + "px";
        box.style.height = newSize + "px"
        box.addEventListener("mouseover", function(event){
            box.classList.add("touchedBox");
        });
        gridContainer.appendChild(box);
    }
});