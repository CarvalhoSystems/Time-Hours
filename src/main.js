function atualizarRelogio(){
  var agora = new Date();
  var dias_da_semana = agora.getDay();
  var hora = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();

  if (hora < 10) hora = "0" + hora;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  var diaNome = "";
  switch (dias_da_semana){
      case 0: diaNome = "Domingo"; break;
      case 1: diaNome = "Segunda-feira"; break;
      case 2: diaNome = "Terça-feira"; break;
      case 3: diaNome = "Quarta-feira"; break;
      case 4: diaNome = "Quinta-feira"; break;
      case 5: diaNome = "Sexta-feira"; break;
      case 6: diaNome = "Sábado"; break;
  }

  var meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  var dia = agora.getDate();
  var mes = meses[agora.getMonth()];
  var ano = agora.getFullYear();

  var dataCompleta = `${diaNome}, ${dia} de ${mes} de ${ano}`;

  document.getElementById("dia").textContent = dataCompleta;
  document.getElementById("relogio").textContent = `${hora}:${minutos}:${segundos}`;

  if (agora.getHours() >= 5 && agora.getHours() < 12) {
      document.body.style.background = "linear-gradient(135deg, #FFEEAD, #FFDD00)";
  } else if (agora.getHours() >= 12 && agora.getHours() < 18) {
      document.body.style.background = "linear-gradient(135deg, #FFA500, #FF4500)";
  } else {
      document.body.style.background = "linear-gradient(135deg, #1f2937, #4b5563)";
  }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
