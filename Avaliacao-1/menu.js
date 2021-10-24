let prato = (resposta, tempo2) => {
  let tempo = 0;
    switch (resposta) {
      case "pipoca":
        tempo = 10;
        break;
      case "macarrao":
        tempo = 8;
        break;
      case "carne":
        tempo = 15;
        break;
      case "feijao":
        tempo = 12;
        break;
      case "brigadeiro":
        tempo = 8;
        break;
  
    }
  
    if (resposta == "pipoca" || resposta == "macarrao" || resposta == "carne" || resposta == "feijao" || resposta == "brigadeiro") {
      if (tempo2 >= tempo * 2 && tempo2 < tempo * 3) { console.log("A comida queimou!"); }
      else if (tempo2 >= tempo * 3) { console.log("kabumm!!!"); }
      else if (tempo2 < tempo) { console.log("O tempo é insuficiente, acrescente alguns segundos!"); }
      else { console.log("O prato esta pronto! Bom Apetite!!!"); }
    }
    else {
      console.log("prato inexistente");
    }
  }
  
  prato("macarrao", 16);
  
  