export function flipColors(which, colors) {
    const squares = document.querySelectorAll(".pad-" + which);

    let colorIndex = 0;

    setInterval(() => {
        squares.forEach(square => {
            square.style.borderColor = colors[colorIndex];
            square.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        });

    }, 1000);
}

export function multiplyNode(node, count) {
    for (var i = 0, copy; i < count; i++) {
        copy = node.cloneNode(true);
        node.parentNode.insertBefore(copy, node);
    }
}