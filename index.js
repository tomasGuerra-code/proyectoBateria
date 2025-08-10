  function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
  }

  // Function to play sound based on key press
  function playSoundByKey(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`)
    const button = document.querySelector(`button[data-key="${key}"]`)
    if (!audio || !button) return

    button.classList.add('playing')
    audio.currentTime = 0;
    audio.play()
  }

  //Teclado
  document.addEventListener('keydown', (e) => {
    const keyCode = e.key.toUpperCase().charCodeAt(0)
    playSoundByKey(keyCode)
})

  //Click
  document.querySelectorAll('.key').addEventListener('click', (e) => {
    const keyElement = e.target.closest('.key')
    if (keyElement) {
        playSoundByKey(keyElement.dataset.key)
    }
  })

  //Quitar la animacion
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('transitionend', removeTransition)
  })