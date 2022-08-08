let nhacNen = new Audio('src/sounds_music/solo.mp3')

let music = document.getElementById('music')
music.addEventListener('click', () => {
         nhacNen.play()
         console.log("da chay");
      })

      