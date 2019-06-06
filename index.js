$(function(){

    $('.planet').hide();

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

    $('#type').delay(7000).fadeOut('slow');
    $('.planet').delay(7000).show(3000);

  });