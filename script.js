const gridContainer = document.querySelector('.gridContainer');
let wh = 16;
for(i = 0; i < wh*wh; i++){
    let box = document.createElement('div');
    box.classList.add("gridBoxes");
    box.addEventListener("click", function(event){
        event.target.style.color = "black";
    });
    gridContainer.appendChild(box);
}
