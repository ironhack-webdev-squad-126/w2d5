/* eslint-disable */
let img
function setup() {
    createCanvas(640, 640)
    frameRate(60)
    img = loadImage(
        'https://raw.githubusercontent.com/ironhack-webdev-squad-126/w2d5/master/assets/bird.png'
    )
}

let ypos = 0

function draw() {
    clear()
    background(240)

    fill(0)
    if (ypos > 640) ypos = 0

    if (mouseIsPressed) {
        ypos -= 1
    } else {
        ypos += 1
    }
    image(img, 300, ypos, img.width / 10, img.height / 10)
}
