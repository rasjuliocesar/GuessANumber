$(document).ready(function() {
	const $maximo = 100
	const $aleatorio = Math.floor(Math.random() * $maximo) + 1
	const $limite = 10
	
	let $paramMin = 0
	let $paramMax = $maximo
	let $contador = 0
	
	$("#campoPalpite").focus()
	console.log($aleatorio)
	let $campoPalpite
	let $button
	let $palpites = $(".palpites")
	
	$(".baixoOuAlto").text("O número está entre " + $paramMin + " e" + $paramMax)
	
	$(".envioPalpite").click(function() {
		$campoPalpite = parseInt($("#campoPalpite").val())
		$("#campoPalpite").val("")
		$contador++

		if($contador == 1){
			$palpites.text("Palpites Anteriores: ")
		}

		$palpites.append($campoPalpite + ' ')
		
		if($campoPalpite == $aleatorio){
			$(".baixoOuAlto").hide()
			$palpites.hide()
			$(".ultimoResultado").text("Parabéns! Você acertou!")
			$(".ultimoResultado").css("color", "white").css("background-color", "green")
			$button = $("<button>Iniciar novo jogo</button>").appendTo("body")
			$button.click(function(){
				window.location.reload()
			})
		}else if($contador == $limite){
			$(".baixoOuAlto").hide()
			$palpites.hide()
			$("#campoPalpite").prop("disabled", true).val("FIM")
			$(".ultimoResultado").text("!!!FIM DE JOGO!!!")
			$(".ultimoResultado").css("color", "white").css("background-color", "red")
			$button = $("<button>Iniciar novo jogo</button>").appendTo("body")
			$button.click(function(){
				window.location.reload()
			})
		}else {
			if(($campoPalpite < $aleatorio) &&($campoPalpite > $paramMin)){
				$paramMin = $campoPalpite
			}else if(($campoPalpite > $aleatorio) && ($campoPalpite < $paramMax)){
				$paramMax = $campoPalpite
			}
			$("#campoPalpite").focus()
			$(".baixoOuAlto").text("O número está entre " + $paramMin + " e " + $paramMax)
		}
	})
})

/*
	var paramMin = 0;
    var paramMax = 100;
    var paramPalpites = 10;
    
    var valMin = paramMin;
    var valMax = paramMax;
	var numeroAleatorio = Math.floor(Math.random() * valMax) + 1;

	var palpites = document.querySelector('.palpites');
	var ultimoResultado = document.querySelector('.ultimoResultado');
	var baixoOuAlto = document.querySelector('.baixoOuAlto');

	var envioPalpite = document.querySelector('.envioPalpite');
	var campoPalpite = document.querySelector('.campoPalpite');

	var contagemPalpites = 1;
	var botaoReinicio;

    baixoOuAlto.textContent = 'O número está entre ' + paramMin + ' e ' + paramMax;
    
    
    let form = document.querySelector('form')
	form.addEventListener('submit', funcao) 

    function funcao(event) {
		event.preventDefault();
	}
    
	envioPalpite.onclick = function() {
		var palpiteUsuario = Number(campoPalpite.value);
		if (contagemPalpites === 1) {
			palpites.textContent = 'Palpites anteriores: ';
		}
		palpites.textContent += palpiteUsuario + ' ';

		if (palpiteUsuario === numeroAleatorio) {
			ultimoResultado.textContent = 'Parabéns! Você acertou!';
			ultimoResultado.style.backgroundColor = 'green';
			baixoOuAlto.textContent = '';
			configFimDeJogo();
		} else if (contagemPalpites === paramPalpites) {
			ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
			ultimoResultado.style.backgroundColor = 'red';
			baixoOuAlto.textContent = '';
			configFimDeJogo();
		} else {
			//ultimoResultado.textContent = 'Errado!';
			//ultimoResultado.style.backgroundColor = 'red';
			if ((palpiteUsuario < numeroAleatorio) && (palpiteUsuario>valMin)) {
				valMin = palpiteUsuario;
			} else if ((palpiteUsuario > numeroAleatorio) && (palpiteUsuario<valMax)) {
				valMax = palpiteUsuario;
			}
            baixoOuAlto.textContent = 'O número está entre ' + valMin + ' e ' + valMax;
		}

		contagemPalpites++;
		campoPalpite.value = '';
		campoPalpite.focus();
	}
    
    //envioPalpite.addEventListener('click', conferirPalpite);
    
	function configFimDeJogo() {
		campoPalpite.disabled = true;
		envioPalpite.disabled = true;
		botaoReinicio = document.createElement('button');
		botaoReinicio.textContent = 'Iniciar novo jogo';
		document.body.appendChild(botaoReinicio);
		botaoReinicio.addEventListener('click', reiniciarJogo);
	}
	function reiniciarJogo() {
		contagemPalpites = 1;
        valMin = paramMin;
        valMax = paramMax;
        
		var reiniciarParas = document.querySelectorAll('.resultadoParas p');
		for (var i = 0; i < reiniciarParas.length; i++) {
			reiniciarParas[i].textContent = '';
		}

		botaoReinicio.parentNode.removeChild(botaoReinicio);

		campoPalpite.disabled = false;
		envioPalpite.disabled = false;
		campoPalpite.value = '';
		campoPalpite.focus();

		ultimoResultado.style.backgroundColor = 'white';

		numeroAleatorio = Math.floor(Math.random() * valMax) + 1;
        baixoOuAlto.textContent = 'O número está entre ' + paramMin + ' e ' + paramMax;
	}
*/