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

$(document).ready(function(){
	$(".square").hover(function(){
		$(this).css("background-color", "hotpink");
	});
});

$(document).ready(function(){
    $("#button").click(function(){
        $(".square").css("background-color", "transparent");
    });
});