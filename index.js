const numDivs = 70;
for (let i = 1; i <= numDivs; i++) {
    let div = document.createElement('div');
    div.className = 's';
    const delay = (i * 3) / 50;
    const hue = 200 - (i * 540) / 10;
    const borderColor = `hsla(${hue}, 100%, 50%, 1)`;
    div.style.animationDelay = `${delay}s`;
    div.style.borderColor = borderColor;
    document.body.appendChild(div);
}