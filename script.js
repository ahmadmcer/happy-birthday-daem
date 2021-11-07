// Get Data
const box = document.getElementById('box')
const pin = document.getElementById('pin')
const giftCard = document.getElementById('gift-card')
const stars = document.getElementById('stars')

const happyBirthday = new Audio('assets/audio/happy_birthday.mp3')
const poem = new Audio('assets/audio/poem.mp3')
const audioStars = new Audio('assets/audio/sparkle.mp3')


// Pin
let i = 0

function pinClick() {
  if (i >= 2) {
    box.style.bottom = '100%'

    happyBirthday.play()

    setTimeout(function() {
      openGiftCard()
      poem.play()
    }, 84000)
  } else {
    i++
  }
}


// Gift Card
function openGiftCard() {
  giftCard.style.display = 'block'
  setTimeout(function() {
    giftCard.style.opacity = '1'
  }, 1)
}

function closeGiftCard() {
  giftCard.style.opacity = '0'
  setTimeout(function() {
    giftCard.style.display = 'none'
  }, 500)
}


// Stars
createStars()

function moveStars() {
  for (let i = 0; i < stars.children.length; i++) {
    stars.children[i].classList.add('star-up')
  }

  audioStars.play()

  setTimeout(function() {
    removeStars()
    createStars()
  }, 5000)
}

function createStars() {
  for (let i = 1; i <= 100; i++) {
    let star = document.createElement('i')
    star.className = 'fas fa-star fa-2x'

    star.style.textShadow = '0 4px 4px hsla(0, 0%, 0%, .25)'
    star.style.position = 'absolute'
    star.style.bottom = '-50%'

    let randomPosition = getRandomArbitrary(0, 50)
    star.style.left = (Math.round(randomPosition) * 2) + '%'

    let randomDuration = getRandomArbitrary(1, 6)
    let fixDuration = Math.round(randomDuration * 100) / 100
    star.style.animationDuration = fixDuration + 's'

    stars.appendChild(star)
  }
}

function removeStars() {
  stars.innerHTML = '';
}


// Randomizer
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}