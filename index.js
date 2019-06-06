$(function(){

    $('.planet').hide();    // Initialy hide all of the planets

    //If a planet is pressed all of the other planets are hidden
    $('.planet').on('click', function(){
      var planetId = $(this).attr('id');
      for (let index = 4; index < 9; index++) {
        if($('#'+planetId).is($('#p'+index)) ){
        
        }
        else{
          $('#p'+index).toggle(800);
        }
        
      }
   });

    $('#type').delay(7000).fadeOut('slow'); //Typewriter animation fadeout delay
    $('.planet').delay(7000).show(3000);    //After delay the planets will be visible

  });