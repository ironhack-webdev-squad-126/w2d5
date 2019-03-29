/* eslint-disable */
let img
function setup() {
    createCanvas(640, 640)
    frameRate(60)
    img = loadImage(
        'https://raw.githubusercontent.com/ironhack-webdev-squad-126/w2d5/master/assets/bird.png'
    )
}

const ACCELERATION = 0.3
let ypos = 200
let velocity = 0

let firstMouseClick = true

function draw() {
    clear()
    background(240)

    fill(0)
    if (ypos > 640) {
        ypos = 0
        velocity = 0
    }

    if (mouseIsPressed) {
        if (firstMouseClick) {
            velocity = -6
            firstMouseClick = false
        }
        velocity += ACCELERATION * -1
    } else {
        firstMouseClick = true
        velocity += ACCELERATION
    }

    ypos += velocity

    image(img, 300, ypos, img.width / 10, img.height / 10)
}
