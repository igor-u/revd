export function flipColors(colors, shadow) {
    const pads = document.querySelectorAll(".pad");

    let index = 0;

    setInterval(() => {
        pads.forEach(pad => {
            pad.style.borderColor = colors[index];
            pad.style.boxShadow = `inset 0 0 ${shadow[index]} 0 rgb(0, 80, 80), 0 0 ${shadow[index]} 0 rgb(0, 80, 80)`;
            index = (index + 1) % colors.length;
        });

    }, 1000);
}

export function multiplyNode(node, count) {
    for (var i = 0, copy; i < count; i++) {
        copy = node.cloneNode(true);
        node.parentNode.insertBefore(copy, node);
    }
}