const {body} = document;

const TRIANGLES_COUNT = 28;

const COLORS = [
    "linear-gradient(to bottom, #ffff66 0%, #00ff00 100%)",
    "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
    "linear-gradient(to bottom, #9900cc 0%, #ffcc66 100%)",
    "linear-gradient(to bottom, #ffff66 0%, #ff0066 100%)",
    "linear-gradient(to bottom, #3333ff 0%, #99ff33 100%)",
    "linear-gradient(to bottom, #ff0066 0%, #ff99cc 100%)"
]

for(let i=0; i<TRIANGLES_COUNT; i++) {
    const triangleEl = document.createElement('div');
    if(i*50*1.414 < window.innerWidth) {
        triangleEl.classList.add('triangles');
        triangleEl.style.left = i*50*1.414 + 'px';
        triangleEl.style.background = randomColor();
        body.appendChild(triangleEl);
    }
}

for(let i=0; i<TRIANGLES_COUNT; i++) {
    const triangleEl2 = document.createElement('div');
    triangleEl2.classList.add('triangles');
    triangleEl2.style.left = (i*50*1.414 + 32) + 'px';
    triangleEl2.style.background = randomColor();
    body.appendChild(triangleEl2);

}

function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

// const heartColor = [
//     "pink",
//     "yellow",
//     "red",
//     "green",
//     "#fc0390",
//     "#03cffc",
//     ""
// ]
const HEARTS_COUNT = 40;

for(let i=0; i<HEARTS_COUNT; i++) {
    const heartEl = document.createElement('div');
    heartEl.classList.add('heart');
    heartEl.style.left = Math.random() * 90 + "%";
    heartEl.style.animationDelay = Math.random() * 2+ "s";
    heartEl.style.animationDuration = Math.random() * 3 + 2.5 + "s";
    heartEl.style.background = randomColor();
    body.appendChild(heartEl);

}

var myAudio = document.getElementById("myAudio");
myAudio.volume = 0.025;
function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};