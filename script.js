const sliders = {
    red: document.getElementById('rouge'),
    green: document.getElementById('vert'),
    blue: document.getElementById('bleu'),
    all: document.querySelectorAll('.sliders')
}

const txt = document.getElementById('hexa')
const circle = document.getElementById('circleColor')




sliders.all.forEach(slider => {
    slider.addEventListener('input', () => {
        updateColor();
    })
})




const updateColor = () => {
    const red = sliders.red.value;
    const green = sliders.green.value;
    const blue = sliders.blue.value;
    const color = `rgb(${red}, ${green}, ${blue})`;

    const hexRed = toHex(red);
    const hexGreen = toHex(green);
    const hexBlue = toHex(blue);
    const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

    const average = ((255 - red) + (255 - green) + (255 - blue)) / 3;


    txt.textContent = hexColor;
    txt.style.color = `rgb(${average}, ${average}, ${average})`;
    circle.style.backgroundColor = color;
};


const toHex = (value) => {
    const hex = Number(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
};