$(document).ready(function(){

	for(i=0; i<=cine.length; i++){ 	
		$(".imagen1").append("<h4>"+cine[0].title+"</h4>"+"<br>"
							+"<h5>Calificación: "+cine[0].calificacion+"</h5>"+"<br>"
							+"<p>"+cine[0].sinopsis+"</p>");

		$(".imagen1").fadeOut("slow");

		$("#uno").click(function(){				
			$(".imagen1").fadeIn("slow");
			$(".imagen2").fadeOut("slow");
			$(".imagen3").fadeOut("slow");
			$(".imagen4").fadeOut("slow");
			$(".imagen5").fadeOut("slow");
			$(".imagen6").fadeOut("slow");
		})

		$(".imagen1").click(function(event) {
			window.location.href = "reserva.html";
		});

		$("#close").click(function(){				
			$(".imagen1").fadeOut("slow");
		})
		
		$(".imagen2").fadeOut("slow");

		$(".imagen2").append("<h4>"+cine[1].title+"</h4>"+"<br>"
							+"<h5>Calificación: "+cine[1].calificacion+"</h5>"+"<br>"
							+"<p>"+cine[1].sinopsis+"</p>");		

		$("#dos").click(function(){				
			$(".imagen2").fadeIn("slow");
			$(".imagen1").fadeOut("slow");
			$(".imagen3").fadeOut("slow");
			$(".imagen4").fadeOut("slow");
			$(".imagen5").fadeOut("slow");
			$(".imagen6").fadeOut("slow");
		})

		$(".imagen2").click(function(event) {
			window.location.href = "reserva.html";
		});

		$("#close2").click(function(){				
			$(".imagen2").fadeOut("slow");
		})

		$(".imagen3").fadeOut("slow");

		$(".imagen3").append("<h4>"+cine[2].title+"</h4>"+"<br>"
							+"<h5>Calificación: "+cine[2].calificacion+"</h5>"+"<br>"
							+"<p>"+cine[2].sinopsis+"</p>");	

		$("#tres").click(function(){				
			$(".imagen3").fadeIn("slow");
			$(".imagen1").fadeOut("slow");
			$(".imagen2").fadeOut("slow");
			$(".imagen4").fadeOut("slow");
			$(".imagen5").fadeOut("slow");
			$(".imagen6").fadeOut("slow");
		})

		$(".imagen3").click(function(event) {
			window.location.href = "reserva.html";
		});

		$("#close3").click(function(){				
			$(".imagen3").fadeOut("slow");
		})


		$(".imagen4").fadeOut("slow");

		$(".imagen4").append("<h4>"+cine[3].title+"</h4>"+"<br>"
							+"<h5>Calificación: "+cine[3].calificacion+"</h5>"+"<br>"
							+"<p>"+cine[3].sinopsis+"</p>");		

		$("#cuatro").click(function(){				
			$(".imagen4").fadeIn("slow");
			$(".imagen1").fadeOut("slow");
			$(".imagen3").fadeOut("slow");
			$(".imagen2").fadeOut("slow");
			$(".imagen5").fadeOut("slow");
			$(".imagen6").fadeOut("slow");
		})

		$(".imagen4").click(function(event) {
			window.location.href = "reserva.html";
		});

		$("#close4").click(function(){				
			$(".imagen4").fadeOut("slow");
		})

		$(".imagen5").fadeOut("slow");

		$(".imagen5").append("<h4>"+cine[4].title+"</h4>"+"<br>"
							+"<h5>Calificación: "+cine[4].calificacion+"</h5>"+"<br>"
							+"<p>"+cine[4].sinopsis+"</p>");		

		$("#cinco").click(function(){				
			$(".imagen5").fadeIn("slow");
			$(".imagen1").fadeOut("slow");
			$(".imagen3").fadeOut("slow");
			$(".imagen4").fadeOut("slow");
			$(".imagen2").fadeOut("slow");
			$(".imagen6").fadeOut("slow");
		})

		$(".imagen5").click(function(event) {
			window.location.href = "reserva.html";
		});

		$("#close5").click(function(){				
			$(".imagen5").fadeOut("slow");
		})

		$(".imagen6").fadeOut("slow");

		$(".imagen6").append("<h4>"+cine[5].title+"</h4>"+"<br>"
							+"<h5>Calificación: "+cine[5].calificacion+"</h5>"+"<br>"
							+"<p>"+cine[5].sinopsis+"</p>");		

		$("#seis").click(function(){				
			$(".imagen6").fadeIn("slow");

			$(".imagen1").fadeOut("slow");
			$(".imagen3").fadeOut("slow");
			$(".imagen4").fadeOut("slow");
			$(".imagen5").fadeOut("slow");
			$(".imagen2").fadeOut("slow");
		})

		$(".imagen6").click(function(event) {
			window.location.href = "reserva.html";
		});

		$("#close6").click(function(){				
			$(".imagen6").fadeOut("slow");
		})
		break;
	}
}) 