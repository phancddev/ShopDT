$(document).click(function(e) {
if($(e.target).closest('.navbar').length == 0) {
// console.log("Click ngoai");


//An navbar - mobile
if ($('#navbarNavDropdown').hasClass('show'))
 $('#navbarNavDropdown').removeClass('show');

   
} else {
    // console.log("Click trong")

}
 })

