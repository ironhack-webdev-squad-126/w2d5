/* eslint-disable */
const game = new Game()

function setup() {
    createCanvas(GAME_WIDTH, GAME_HEIGHT)
    frameRate(60)

    game.setup()
}

function draw() {
    clear()
    background(240)

    game.draw()
}
