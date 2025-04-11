import p5 from "p5";

let bunnyImage: p5.Image;

const p = new p5((sketch) => {
    sketch.setup = setup;
    sketch.preload = preload;
    sketch.draw = draw;
});

function preload() {
    bunnyImage = p.loadImage("assets/bunny.png")

}
function setup() {
    p.createCanvas(400, 400);
}

function draw() {
    p.background("white");
    p.image(bunnyImage, 0, 0);
}