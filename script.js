// Get Data
const box = document.getElementById('box')
const pin = document.getElementById('pin')
const stars = document.getElementById('stars')

const happyBirthday = new Audio('assets/audio/happy_birthday.mp3')
const poem = new Audio('assets/audio/poem.mp3')
const audioStars = new Audio('assets/audio/sparkle.mp3')


// Pin
let i = 0

function pinClick() {
  if (i >= 2) {
    box.style.bottom = '100%'

    playSong()
    setTimeout(function () {
      poem.play()
    }, 84000)
  } else {
    i++
  }
}


// Play Song
function playSong() {
  happyBirthday.play()
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

    let randomPosition = getRandomArbitrary(0, 100)
    star.style.left = Math.round(randomPosition) + '%'

    let randomDuration = getRandomArbitrary(2, 5)
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