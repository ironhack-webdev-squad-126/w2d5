/* eslint-disable */

const activeCards = []

// 0. on a card click, check if that card is already visible from the history
// 1. on a card click, add that card DOM element to your active Cards
// 2. on a second card click, add that also to your activeCards Array
// 3. Select the front element inside each of the cards and compare the background image
// 3.1. if they match, increase an imaginary score and dont turn them back
// 3.2. if they don't match, turn both cards background
// 4. clear your activeCards Array
//

shuffle()
assignImages()
setCardClickListener()

function setCardClickListener() {
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function(evt) {
            TweenMax.to(card, 0.5, { transform: 'rotateY(180deg)' })
        })
    })
}

function assignImages() {
    const randImages = [
        'https://images.unsplash.com/photo-1553774159-1cc7b4a37856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1553558905-22a755dd0407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1553564240-3c5d39e8a253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1553560015-3cad96043542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1553781808-f27ef4fdd633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1553538644-b03187dc1462?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ]
    const frontCards = Array.from(document.querySelectorAll('.card .front'))
    while (frontCards.length > 0) {
        const firstFront = frontCards.splice(Math.floor(Math.random() * frontCards.length), 1)[0]
        const secondFront = frontCards.splice(Math.floor(Math.random() * frontCards.length), 1)[0]

        const image = randImages.shift()
        console.log('firstFront :', firstFront)
        firstFront.style.backgroundImage = `url(${image})`
        secondFront.style.backgroundImage = `url(${image})`
    }
    console.log('frontCards :', frontCards)
}

function shuffle() {
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
}

function getRandomInt(max, negative) {
    let randNum = Math.floor(Math.random() * max)
    if (negative && Math.random() < 0.5) {
        randNum *= -1
    }

    return randNum
}
