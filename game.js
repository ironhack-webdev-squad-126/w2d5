/* eslint-disable */
// TweenMax.to('.ball', 1.5, { y: 500 })
// TweenMax.staggerTo('.ball', 1.5, { y: 500 }, 0.25)
// TweenMax.staggerFromTo(
//     '.ball',
//     1.5,
//     { y: 0, scale: 0.1, opacity: 0 },
//     { y: 500, scale: 1, opacity: 1, ease: Bounce.easeOut },
//     0.25
// )

// TweenMax.staggerFromTo(
//     '.ball',
//     1.5,
//     { y: 0, scale: 0.1, opacity: 0 },
//     { y: 500, scale: 1, opacity: 1, ease: Bounce.easeOut, yoyo: true, repeat: -1 },
//     0.25
// )

// 1 Ball
// document.querySelector('.ball').addEventListener('click', function(evt) {
//     TweenMax.to('.ball', 2.5, { y: 500, ease: Elastic.easeIn.config(1, 0.3) })
// })

document.querySelectorAll('.ball').forEach(domBall => {
    domBall.addEventListener('click', function() {
        TweenMax.to(this, 2.5, { y: 500, ease: Bounce.easeOut })
    })
})
