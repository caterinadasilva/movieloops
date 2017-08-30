$(document).ready(function(){
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
});
if ($( ".monto-final" )) {
	var countChecked = function() {
	  var n = $( "input:checked" ).length;
	  $( ".asientos-sel" ).text( n );
	  $( ".monto-final" ).text( n * 4300 );
	};
	countChecked();
	$( "input[type=checkbox]" ).on( "click", countChecked );
}
	

