$(document).ready(function(){

	for(i=0; i<=cine.length; i++){ 	
		$(".imagen1").append("<h4>"+cine[0].title+"</h4>"+"<br>"
							+"<h3>Calificación: </h3><h5>"+cine[0].calificacion+"</h5>"+"<br>"
							+"<p>Reseña: "+cine[0].sinopsis+"</p>");

		$(".imagen1").hide();

		$("#uno").click(function(){				
			$(".imagen1").fadeIn("slow");
		})

		$("#close").click(function(){				
			$(".imagen1").hide();
		})
		
		$(".imagen2").hide();

		$(".imagen2").append("<h4>"+cine[1].title+"</h4>"+"<br>"
							+"<h3>Calificación: </h3><h5>"+cine[1].calificacion+"</h5>"+"<br>"
							+"<p>Reseña: "+cine[1].sinopsis+"</p>");		

		$("#dos").click(function(){				
			$(".imagen2").fadeIn("slow");
		})

		$("#close2").click(function(){				
			$(".imagen2").hide();
		})

		$(".imagen3").hide();

		$(".imagen3").append("<h4>"+cine[2].title+"</h4>"+"<br>"
							+"<h3>Calificación: </h3><h5>"+cine[2].calificacion+"</h5>"+"<br>"
							+"<p>Reseña: "+cine[2].sinopsis+"</p>");	

		$("#tres").click(function(){				
			$(".imagen3").fadeIn("slow");
		})

		$("#close3").click(function(){				
			$(".imagen3").hide();
		})


		$(".imagen4").hide();

		$(".imagen4").append("<h4>"+cine[3].title+"</h4>"+"<br>"
							+"<h3>Calificación: </h3><h5>"+cine[3].calificacion+"</h5>"+"<br>"
							+"<p>Reseña: "+cine[3].sinopsis+"</p>");		

		$("#cuatro").click(function(){				
			$(".imagen4").fadeIn("slow");
		})

		$("#close4").click(function(){				
			$(".imagen4").hide();
		})

		$(".imagen5").hide();

		$(".imagen5").append("<h4>"+cine[4].title+"</h4>"+"<br>"
							+"<h3>Calificación: </h3><h5>"+cine[4].calificacion+"</h5>"+"<br>"
							+"<p>Reseña: "+cine[4].sinopsis+"</p>");		

		$("#cinco").click(function(){				
			$(".imagen5").fadeIn("slow");
		})

		$("#close5").click(function(){				
			$(".imagen5").hide();
		})

		$(".imagen6").hide();

		$(".imagen6").append("<h4>"+cine[5].title+"</h4>"+"<br>"
							+"<h3>Calificación: </h3><h5>"+cine[5].calificacion+"</h5>"+"<br>"
							+"<p>Reseña: "+cine[5].sinopsis+"</p>");		

		$("#seis").click(function(){				
			$(".imagen6").fadeIn("slow");
		})

		$("#close6").click(function(){				
			$(".imagen6").hide();
		})
		break;
	}
}) 