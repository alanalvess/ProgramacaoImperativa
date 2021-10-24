// Criamos a função 'menu' para uso em um microondas residencial

function menu(prato, opcoesTempo) {

  // Inicalmente definimos o tempo padrão para cada prato do menu
  switch (prato) {

    // Pipoca
    case 'Pipoca': tempo = 10;
      break;

    // Macarrão
    case 'Macarrão': tempo = 8;
      break;

    // Carne
    case 'Carne': tempo = 15;
      break;

    // Feijão
    case 'Feijão': tempo = 12;
      break;

    // Brigadeiro
    case 'Brigadeiro': tempo = 8;
      break;

  }

  // O usuário escolhe um prato no menu
  // Definimos a mensagem que ficará visível durante o preparo do alimento.
  if (prato == 'Pipoca' || prato == 'Macarrão' || prato == 'Carne' || prato == 'Feijão' || prato == 'Brigadeiro') {
    console.log('Você escolheu ' + prato + ', o seu prato ficará pronto em ' + opcoesTempo + ' segundos.\n-----------');

    // Durante o preparo o visor mostrará também os segundos 
    for (let i = opcoesTempo; i >= 0; i--) {
      setTimeout(function () { console.log('Preparando: ' + i + 'segundos') }, i * 1000);
    }
  }
  else {
    console.log('Você escolheu um prato não cadastrado.')
  }


  // Definimos a mensagem que será exibida após o tempo de preparo.
  // Repare que temos difentes opções de mesangens para cada tempo escolhido de acordo com o alimento.
  if (prato == 'Pipoca' || prato == 'Macarrão' || prato == 'Carne' || prato == 'Feijão' || prato == 'Brigadeiro') {
    setTimeout(function () {
      if (opcoesTempo < tempo) { console.log('-----------\n' + prato + ' ainda não está pronto, acrescente alguns segundos.') }
      else if (opcoesTempo >= tempo * 2 && opcoesTempo < tempo * 3) { console.log('-----------\nO tempo escolhido para preparar ' + prato + ' foi muito alto, sua comida queimou.') }
      else if (opcoesTempo >= tempo * 3) { console.log('-----------\nO tempo escolhido para preparar ' + prato + ' foi muito alto, sua comida virou torrão.') }
      else { console.log('-----------\n' + prato + ' pronto, bom apetite!!!') }

      // O tempo da função setTimeout é definido em milisegundos
      // Visando facilitar para o usuário final, o tempo do menu é definido em segundos
      // Por este motivo temos que realizar uma conversão de tempo
    }, opcoesTempo * 1000)
  }

  else {
    console.log('-----------\nPor favor, escolha um prato existente no menu.');
  }
}

menu('Pipoca', 10);
