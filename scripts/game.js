/* eslint-disable */

class Game {
    constructor() {
        // add some properties
        this.obstacles = []
        this.bird = new Bird()
        this.gameOver = false
        this.count = 0
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        frameRate(60)
        this.bird.setup()

        setInterval(
            function() {
                this.obstacles.push(new Obstacle())
                if (this.obstacles.length > 3) this.obstacles.shift()
            }.bind(this),
            1350
        )
    }

    draw() {
        clear()
        background(180)
        if (this.gameOver) {
            textSize(50)
            text('Game Over', 10, 30)
        } else {
            this.bird.draw()
            this.obstacles.forEach(function(obstacle) {
                obstacle.draw()
            })
        }
    }

    over() {
        this.gameOver = true
    }
}
