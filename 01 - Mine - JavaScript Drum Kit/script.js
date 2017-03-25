window.addEventListener('keydown', playMusic)
var keys = document.querySelectorAll(`.key`)
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
keys.forEach(key => key.addEventListener('click', playMusic))

function removeTransition(event) {
  if (event.propertyName === "transform") {
    event.target.classList.remove("playing")
  }
}

function playMusic(event) {
  var eventType = event.type

  if (eventType === "keydown") {
      var keyCode = event.keyCode
      if (!keyCode) return
      var key = document.querySelector(`[data-key="${keyCode}"]`)
      var audio = document.querySelector(`audio[data-key="${keyCode}"]`)
      if (!key) return
  }

  if (eventType === "click") {
      var keyCode = event.currentTarget.dataset.key
      if (!keyCode) return
      var key = document.querySelector(`[data-key="${keyCode}"]`)
      var audio = document.querySelector(`audio[data-key="${keyCode}"]`)
      if (!key) return
  }

  key.classList.add("playing")
  audio.currentTime = 0
  audio.play()
}
