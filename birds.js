/* eslint-disable */
function setup() {
    createCanvas(640, 640)
    frameRate(60)
    background(230)
}

let ypos = 0
let yposTwo = 0

function draw() {
    clear()
    background(230)

    if (ypos > 640) ypos = 0
    if (yposTwo > 640) yposTwo = 0

    fill(0)

    ellipse(400, ypos++, 80, 80)
    yposTwo += 2
    ellipse(300, yposTwo, 80, 80)
}
