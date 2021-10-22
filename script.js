const gridContainer = document.querySelector('.gridContainer');
for(i = 0; i < 265; i++){
    let box = document.createElement('div');
    box.classList.add("gridBoxes");
    gridContainer.appendChild(box);
}