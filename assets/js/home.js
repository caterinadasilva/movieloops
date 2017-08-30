$(document).ready(function(){
    $("#show").hide();
    $("#opciones_1").on( "click", function() {
        $("#primerosfiltros").show();
    });

    $("#uno").click(function(){
		$(".imagen1").css({"background-color": "white"});
	});
});