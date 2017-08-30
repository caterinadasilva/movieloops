$(document).ready(function(){
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
});
	var countChecked = function() {
	  var n = $( "input:checked" ).length;
	  $( "#monto-final" ).text( n * 4300 );
	};
	countChecked();
	 
	$( "input[type=checkbox]" ).on( "click", countChecked );

