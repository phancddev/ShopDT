//Import music
var nhacNen = new Audio('/src/sounds _music/solo.mp3')
//get Id music
// let music = document.getElementById('music')

// let music2 = document.getElementById('bodyMu') 

function checkNhac() {
if( $('#batTatNhac').hasClass('nhacBat')) {
   return true;
}
}

$(document).click(function(e) {
   if($(e.target).closest('.bodyMu').length == 0) {

if ($('#batTatNhac').hasClass('nhacBat')) 
   
   $('#batTatNhac').removeClass('nhacBat');
   
   
   console.log('da chay');
   $('#notiPhatNhac').removeClass('an');
   $('#notiPhatNhac').addClass('hien');
  
   if (typeof nhacNen.loop == 'boolean')
{
    nhacNen.loop = true;
}
else
{
    nhacNen.addEventListener('ended', function() {
        this.currentTime = 175;
        this.play();
    }, false);
} nhacNen.play();

}
   else if(!checkNhac()) { {
    
      console.log('da tat');
      nhacNen.pause();
      $('#notiPhatNhac').removeClass('hien');
      $('#notiPhatNhac').addClass('an');
      $('#batTatNhac').addClass('nhacBat');
   
      
    }
   }
}) 



//    }
//    $('#batTatNhac').removeClass('nhacBat');
// } else
// music.addEventListener('click', () => {
         // nhacNen.play();
       
      // })

// let music2 = document.getElementById('bodyMu') 

// music2.addEventListener('click', () => {
//           check = () => {if(nhacNen.play()) {
//             return true;
//          }
           
//           }
//     if(check() == 0) {
//                nhacNen.pause();
//             } else
//    nhacNen.play();
//             console.log("da chay");
            
            
// })
// $(document).click(function(e) {
  
//  })