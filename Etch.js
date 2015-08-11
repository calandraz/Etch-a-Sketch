//creates 16X16 grid
$(document).ready(function(){
var $grid = $('.cube');
    for(var i = 0; i < 16; i++){
        var row = '<div>';
            for(var j = 0; j < 16; j++)
                row += '<div class="square">' + j + '</div>';
                row += '</div>';
                $grid.append(row);
            }
});

// allows user to draw on sketch pad
$(document).ready(function(){
	$(".square").hover(function(){
		$(this).css("background-color", "hotpink");
	});
});

// clears the grid
$(document).ready(function(){
    $("#button").click(function(){
        $(".square").css("background-color", "transparent");
    });
});

// creates new grid and allows for drawing
$(document).ready(function(){
    $("#button").click(function(){
        $(".square").detach();
        var newG = prompt("would you like a new grid? Enter number between 1-110");
        
         var $grid = $(".cube");
     for(var i = 0; i < newG; i++){
        var row = '<div>';
        for(var j = 0; j < newG; j++)
        row += '<div class="square">' + j + '</div>';
        row += '</div>';
        $grid.append(row);
        console.log(newG);
    }
    $(".square").hover(function(){
		$(this).css("background-color", "hotpink");
	});
    
});
});