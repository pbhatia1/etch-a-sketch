const container = document.getElementById('container');
const reset = document.getElementById('reset');
const size = document.getElementById('size');


makeGrid(16, 16);
draw();

function sizeCanvas() {
    let size = prompt("Please enter a number between 0 - 100 to change the pixel size: ", "");
    if(size > 100){
        size = prompt("Enter a number between 0 - 100", '');
        if(size > 100){
            location.reload();
            return false;
        }
    };
    erase();
    makeGrid(size, size);
    draw();
};

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < rows * cols; i++) {
        let pixel = document.createElement("div");
        pixel.id = i + 1;
        container.appendChild(pixel).className = "pixel";
    };
};

function draw() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", function() {
            pixel.classList.add('draw');
        });
    });
};

function erase() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.classList.remove('draw');
    });
    draw();
};


reset.addEventListener('mouseup', erase);
size.addEventListener('mouseup', sizeCanvas);

