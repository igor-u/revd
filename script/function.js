export function flipColors(colors) {
    const pads = document.querySelectorAll(".pad");

    let colorIndex = 0;

    setInterval(() => {
        pads.forEach(pad => {
            pad.style.backgroundColor = colors[colorIndex];
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