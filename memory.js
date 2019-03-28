/* eslint-disable */

document.querySelectorAll('.card').forEach(function(card, index) {
    TweenMax.fromTo(
        card,
        1,
        { x: getRandomInt(500, true), y: getRandomInt(500, true) },
        {
            x: 0,
            y: 0,
            ease: Back.easeOut,
        }
    )
})

function getRandomInt(max, negative) {
    let randNum = Math.floor(Math.random() * max)
    if (negative && Math.random() < 0.5) {
        randNum *= -1
    }

    return randNum
}
