//https://es.stackoverflow.com/questions/297013/hacer-un-anotador-de-tenis-con-jquery-o-javascript 
// Array donde se definen los puntajes
var puntajes = [0, 15, 30, 40, 'A','G'];
		
		// Definiciones de los puntos de ambos jugadores
        var i = 0;
        var r = 0;
        
		// Log
        console.log("i vale " + i);
        console.log("r vale " + r);

		// Función para imprimir por pantalla los puntos de cada jugador
		function definirPuntaje() {
			$("#puntaje-jugador1").val(puntajes[i]);
			$("#puntaje-jugador2").val(puntajes[r]);
		}
		
		// Definir el puntaje al iniciar el script
		definirPuntaje();


		// Al añadir un punto al primer jugador
		$('#s1').click(function() {
			
			if (i === 4 || (i === 3 && r < 3)) { // Situación 1: Si i vale 4 ('A') o i vale 3 (40) y r vale 2 (30) o menos, suma otro tanto, se termina el juego y se resetea el marcador...
				i = 5;
			} 
			else if ((i === 5 && r <= 4)){ 
			    i = 0;
				r = 0;
			}
			else if (i === 3 && r === 4) { // Situación 2: Si i vale 3 (40) y r vale 4 ('A') se vuelve a 40-40...
				i = 3;
				r = 3;
			} else if (i != 5) { // Situación 3: Si no, se suma un punto al primer jugador...
				i++;
			}
			
			// Actualiza el resultado en función de los valores dados a i y r
			definirPuntaje();
        });


		// Al añadir un punto al segundo jugador
		$('#s2').click(function() {
			if (r === 4 || (i < 3 && r === 3)) { // Situación 1: Si r vale 4 ('A') o i vale 2 (30) o menos y r vale 3 (40), suma otro tanto, se termina el juego y se resetea el marcador...
				r = 5;

				// Aquí dentro podrías incluir código para calcular los juegos y sets que lleva cada uno...
			} 
			else if ((r === 5 && i <= 4)){ 
			    i = 0;
				r = 0;
			}
			else if (r === 3 && i === 4) { // Situación 2: Si i vale 4 ('A') y r vale 3 (40) se vuelve a 40-40...
				i = 3;
				r = 3;
			} 
			else if (i != 5){ // Situación 3: Si no, se suma un punto al segundo jugador...
				r++;
			}
			
			// Actualiza el resultado en función de los valores dados a i y r
			definirPuntaje();
        });