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
        this.bird.setup()
    }

    draw() {
        this.bird.draw()
    }
}
