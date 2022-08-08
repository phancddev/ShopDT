let nhacNen = new Audio('./src/music_sounds/solo.mp3')

window.addEventListener('click', () => {
         nhacNen.play()
      }, { once: true })