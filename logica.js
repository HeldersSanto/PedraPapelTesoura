var elementos = document.querySelectorAll('.player-options div > img');
var reset = document.querySelector('.reset button');
var vencedor = document.querySelector('.vencedor');
var playerOpt = "";
var inimigoOpt = "";
var pontos = 0;

function validarVitoria() {
  if (playerOpt == "papel") {
    if (inimigoOpt == "papel") {
      vencedor.innerHTML = "O jogo foi empatado seus pontos são: " + pontos + " ";
    } else if (inimigoOpt == "tesoura") {
      vencedor.innerHTML = "O inimigo ganhou seus pontos são: " + pontos + "";
    } else if (inimigoOpt == "pedra") {
      pontos++;
      vencedor.innerHTML = "O player ganhou seus pontos são: " + pontos + " ";
    }
  }
  if (playerOpt == "tesoura") {
    if (inimigoOpt == "papel") {
      pontos++;
      vencedor.innerHTML = "O player ganhou  seus pontos são: " + pontos + " ";
    } else if (inimigoOpt == "tesoura") {
      vencedor.innerHTML = "O jogo foi empatado seus pontos são:" + pontos + " ";
    } else if (inimigoOpt == "pedra") {
      vencedor.innerHTML = "O inimigo ganhou seus pontos são: " + pontos + "";
    }
  }
  if (playerOpt == "pedra") {
    if (inimigoOpt == "papel") {
      vencedor.innerHTML = "O inimigo ganhou seus pontos são: " + pontos + " ";
    } else if (inimigoOpt == "tesoura") {
      pontos++;
      vencedor.innerHTML = "O player ganhou seus pontos são: " + pontos + " ";
    } else if (inimigoOpt == "pedra") {
      vencedor.innerHTML = "O jogo foi empatado seus pontos são: " + pontos + " ";
    }
  }
}

function resetInimigo() {
  const enemyOptions = document.querySelectorAll('.enemy-options div');
  for (var i = 0; i < enemyOptions.length; i++) {
    enemyOptions[i].childNodes[0].style.opacity = 0.3;
    enemyOptions[i].childNodes[0].style.width = "100px";
  }
}

function inimigoJogar() {
  let rand = Math.floor(Math.random() * 3);
  const enemyOptions = document.querySelectorAll('.enemy-options div');
  resetInimigo();
  for (var i = 0; i < enemyOptions.length; i++) {
    if (i == rand) {
      enemyOptions[i].childNodes[0].style.opacity = 1;
      enemyOptions[i].childNodes[0].style.width = "150px"
      inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
    }
  }
  validarVitoria();
}

function resetOpacityPlayer() {
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 0.3;
    elementos[i].style.filter = "none";
    elementos[i].style.width = "100px";
  }
}

for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('click', function (t) {
    resetOpacityPlayer();
    t.target.style.opacity = 1;
    t.target.style.filter = "drop-shadow(2px 4px 8px green)";
    t.target.style.width = "150px";
    playerOpt = t.target.getAttribute('opt');
    inimigoJogar();
  });
}
reset.addEventListener('click', function () {
  resetOpacityPlayer();
  resetInimigo();
  pontos = 0;
  vencedor.innerHTML = "seus pontos são: " + pontos + "";
});