/* eslint-disable */
let img
function setup() {
    createCanvas(640, 640)
    frameRate(60)
    background(230)
    img = loadImage('assets/bird.png')
}

let ypos = 0

function draw() {
    clear()
    background(230)

    fill(0)
    if (ypos > 640) ypos = 0

    if (mouseIsPressed) {
        ypos -= 1
    } else {
        ypos += 1
    }
    image(img, 300, ypos, img.width / 7, img.height / 7)
}
