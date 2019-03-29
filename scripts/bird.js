/* eslint-disable */

class Bird {
    constructor() {}

    setup() {
        this.img = loadImage(
            'https://raw.githubusercontent.com/ironhack-webdev-squad-126/w2d5/master/assets/bird.png'
        )

        this.ypos = 200
        this.velocity = 0
        this.firstMouseClick = true
    }

    draw() {
        fill(0)
        if (this.ypos > 640) {
            this.ypos = 0
            this.velocity = 0
        }

        // mouseIsPressed comes from P5
        if (mouseIsPressed) {
            if (this.firstMouseClick) {
                this.velocity = -6
                this.firstMouseClick = false
            }
            this.velocity += ACCELERATION * -1
        } else {
            this.firstMouseClick = true
            this.velocity += ACCELERATION
        }

        this.ypos += this.velocity

        image(this.img, 300, this.ypos, this.img.width / 10, this.img.height / 10)
    }
}
