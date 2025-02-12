function applyFlashingColors() {
    const squares = document.querySelectorAll(".square");
    const colors = ["green", "red", "blue", "yellow"];

    let colorIndex = 0;

    setInterval(() => {
        squares.forEach(square => {
            square.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        });

    }, 1500);
}

applyFlashingColors();
