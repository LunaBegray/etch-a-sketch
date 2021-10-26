const gridContainer = document.querySelector('.gridContainer');
let wh = 16;
for(i = 0; i < wh*wh; i++){
    let box = document.createElement('div');
    box.classList.add("gridBoxes");
    box.addEventListener("mouseover", function(event){
        box.classList.add("touchedBox");
    });
    gridContainer.appendChild(box);
}
let btn = document.querySelector('.btn');
let allBoxes = document.querySelector('.gridBoxes');
btn.addEventListener("click", () => {
    for(i=0; i < wh*wh; i++)
        allBoxes[i].classList.remove("touchedBox");
});
