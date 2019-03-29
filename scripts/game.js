/* eslint-disable */

class Game {
    constructor() {
        // add some properties
        this.obstacles = []
        this.bird = new Bird()
        this.init()
    }

    init() {}

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        frameRate(60)
        this.bird.setup()
    }

    draw() {
        clear()
        background(240)
        this.bird.draw()
    }
}
