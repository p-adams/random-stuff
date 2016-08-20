$(document).ready(function(){
    
    // Get the array of all the .bead
    var $beads = $('.bead');
    
    // set initial count
    var count = 0;
    
    var c = 0;
    // set initial direction
    var opposite = false;
    
    $(".stylish2").on('click', function(){       
        c = 0;
        count = 0;
        $beads.css('background-color', '#7d4627');
        document.getElementById('c').innerHTML = c;
    });
    
    $(".stylish").on( 'click', function() {
        
        c += 1;
        
        document.getElementById('c').innerHTML = c;
        
    	if (count < $beads.length && !opposite) {
        // we use count for the index
      	var $currentBead = $beads[count];
        $($currentBead).css('background-color', 'gray');
        count++; // add to count

      } else if (count === $beads.length && !opposite ) {
      	$beads.css('background-color', '#7d4627');
        count--;
        c -= 1;
        opposite = true;

      } else if (count >= 0 && opposite){
      	$($beads[count]).css('background-color', 'gray');
        count--; // subtract count
        

      } else {
        // reset everything to the start
      	count = 0;
        c -= 1;
      	opposite = false;
        $beads.css('background-color', '#7d4627');
      }
    })
});
