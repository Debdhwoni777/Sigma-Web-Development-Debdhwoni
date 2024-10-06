function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get all boxes
const boxes = document.querySelectorAll('.box');

// Loop through each box and assign random color and background
boxes.forEach(box => {
    box.style.color =  getRandomColor();
    box.style.backgroundColor = getRandomColor();
});