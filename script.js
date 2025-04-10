let statusBar = {
  saude: 40,
  ambiente: 40,
  economia: 56,
};

function statusBarra() {
  function criarBarra(id, labelText, valor, cor) {
    const containerBarra = document.getElementById(id); // Pega o container existente

    containerBarra.innerHTML = ""; // Limpa o conteúdo existente

    const label = document.createElement("span");
    label.className = "barra-label";
    label.textContent = `${labelText}: `;
    label.style.color = "#0077b6";
    containerBarra.appendChild(label);

    // Container da barra
    const barraContainer = document.createElement("div");
    barraContainer.className = "barra-container";

    // Parte preenchida da barra
    const barraPreenchida = document.createElement("div");
    barraPreenchida.className = "barra-preenchida";
    barraPreenchida.style.width = `${valor}%`;
    barraPreenchida.style.backgroundColor = "#48cae4";

    barraContainer.appendChild(barraPreenchida);
    containerBarra.appendChild(barraContainer);

    let porcentagem = document.createElement("span");
    porcentagem.className = "barra-porcentagem";
    // porcentagem.id = id + "Porcent"; // Adiciona "Porcent" ao ID base
    porcentagem.textContent = `${valor}%`;
    porcentagem.style.color = "#0077b6";
    containerBarra.appendChild(porcentagem);
  }

  // Cria cada barra usando a função auxiliar
  criarBarra("saudeBar", "Saúde", statusBar.saude, "#6bcb77");
  criarBarra("ambienteBar", "Ambiente", statusBar.ambiente, "#6bcb77");
  criarBarra("economiaBar", "Economia", statusBar.economia, "#6bcb77");
}

function iniciar() {
  document.getElementById("start").style.display = "none";

  statusBarra();

  let paragrafo = document.createElement("p");
  paragrafo.id = "paragrafoIniciar";
  paragrafo.textContent =
    "Bem vindo à Green Life City! Como você pode ver, as coisas estão um pouco caóticas por aqui. O rio principal está contaminado, há lixo pelas ruas e a floresta está ameaçada. Por isso precisamos da sua ajuda para salvar a cidade. Vamos lá?!";
  document.getElementById("welcome").appendChild(paragrafo);

  let div = document.createElement("div");
  div.id = "divBtnCap1";
  document.getElementById("welcome").appendChild(div);

  let btnChapter1 = document.createElement("button");
  btnChapter1.className = "btnGame";
  btnChapter1.id = "btnChapter1";
  btnChapter1.textContent = "Capítulo 1";
  btnChapter1.onclick = chapter1;
  document.getElementById("welcome").appendChild(btnChapter1);

  let imgIniciar = document.createElement("img");
  imgIniciar.className = "imgGame";
  imgIniciar.src = "imagens/cidadeMal.jpg";
  document.getElementById("welcome").appendChild(imgIniciar);

  let backgroundIniciar = document.createElement("div");
  backgroundIniciar.id = "backgroundIniciar";
  document.getElementById("welcome").appendChild(backgroundIniciar);
}

let escolhas = {
  capitulo1: "",
  capitulo2: "",
  capitulo3: "",
  capitulo4: "",
};

function atualizarBar() {
  document.getElementById("saudeBar").style.width = statusBar.saude + "%";
  document.getElementById("ambienteBar").style.width = statusBar.ambiente + "%";
  document.getElementById("economiaBar").style.width = statusBar.economia + "%";
}

function chapter1() {
  document.getElementById("welcome").style.display = "none";

  let backgroundCap1 = document.createElement("div");
  backgroundCap1.id = "backgroundCap1";
  document.getElementById("chapter1").appendChild(backgroundCap1);

  let paragrafo = document.createElement("p");
  paragrafo.innerHTML =
    "O ar está bastante poluído devido às fumaças produzidas por carros, motos, ônibus e fábricas sem controle ambiental. E isso está causando doenças respiratórias nos cidadãos de Green Life City. O que você deseja fazer para resolver isso? <br><br> Opção 1: Incentivar o uso de transporte público e bicicletas. <br><br> Opção 2: Incentivar o uso de transporte público e bicicletas e incentivar que as fábricas reduzam as emissões voluntariamente.";
  document.getElementById("chapter1").appendChild(paragrafo);

  let div = document.createElement("div");
  div.id = "divBtnOpsCap1";
  document.getElementById("chapter1").appendChild(div);

  let btnOption1 = document.createElement("button");
  btnOption1.className = "btnGame";
  btnOption1.id = "btnOp1Cap1";
  btnOption1.textContent = "Opção 1";
  btnOption1.onclick = function () {
    statusBar.saude += 10;
    statusBar.ambiente += 10;
    statusBar.economia -= 3;

    atualizarBar();
    op1Chapter1();
    console.log(statusBar);
  };
  document.getElementById("chapter1").appendChild(btnOption1);

  let btnOption2 = document.createElement("button");
  btnOption2.className = "btnGame";
  btnOption2.id = "btnOp2Cap1";
  btnOption2.textContent = "Opção 2";
  btnOption2.onclick = function () {
    statusBar.saude += 5;
    statusBar.ambiente += 5;
    statusBar.economia += 15;

    atualizarBar();
    op2Chapter1();
    console.log(statusBar);
  };
  document.getElementById("chapter1").appendChild(btnOption2);

  let imgChapter1 = document.createElement("img");
  imgChapter1.className = "imgGame";
  imgChapter1.id = "imgChapter1";
  imgChapter1.src = "imagens/arPoluido2.jpg";
  document.getElementById("chapter1").appendChild(imgChapter1);
}

function op1Chapter1() {
  document.getElementById("chapter1").style.display = "none";

  escolhas.capitulo1 = "a";
  console.log(escolhas.capitulo1);

  let paragrafo = document.createElement("p");
  paragrafo.textContent =
    "A poluição do ar foi reduzida e a saúde da população melhorou, mas houve um impacto na economia com o investimento em transporte público, além de afetar postos de combustíveis e indústria automotiva com a redução de carros próprios.";
  document.getElementById("optionsChapter1").appendChild(paragrafo);

  let div = document.createElement("div");
  div.id = "divBtnCap2Op1";
  document.getElementById("optionsChapter1").appendChild(div);

  let btnChapter2 = document.createElement("button");
  btnChapter2.className = "btnGame";
  btnChapter2.id = "btnChapter2Op1";
  btnChapter2.textContent = "Capítulo 2";
  btnChapter2.onclick = chapter2;
  document.getElementById("optionsChapter1").appendChild(btnChapter2);

  let imgOption1 = document.createElement("img");
  imgOption1.className = "imgGame";
  imgOption1.src = "imagens/transportePublico.jpg";
  document.getElementById("optionsChapter1").appendChild(imgOption1);

  statusBarra();
}

function op2Chapter1() {
  document.getElementById("chapter1").style.display = "none";

  escolhas.capitulo1 = "b";
  console.log(escolhas.capitulo1);

  let paragrafo = document.createElement("p");
  paragrafo.textContent =
    "A qualidade do ar melhorou rapidamente, mas algumas fábricas tiveram que fechar, causando desemprego e impactando a economia.";
  document.getElementById("optionsChapter1").appendChild(paragrafo);

  statusBarra();

  let div = document.createElement("div");
  div.id = "divBtnCap2Op1";
  document.getElementById("optionsChapter1").appendChild(div);

  let btnChapter2 = document.createElement("button");
  btnChapter2.className = "btnGame";
  btnChapter2.id = "btnChapter2Op2";
  btnChapter2.textContent = "Capítulo 2";
  btnChapter2.onclick = chapter2;
  document.getElementById("optionsChapter1").appendChild(btnChapter2);

  let imgOption2 = document.createElement("img");
  imgOption2.className = "imgGame";
  imgOption2.id = "imgOption2Cap1";
  imgOption2.src = "imagens/desemprego.jpg";
  document.getElementById("optionsChapter1").appendChild(imgOption2);
}

function chapter2() {
  document.getElementById("optionsChapter1").style.display = "none";
  document.getElementById("btnChapter2").style.display = "none";

  let backgroundCap2 = document.createElement("div");
  backgroundCap2.id = "backgroundCap2";
  document.getElementById("chapter2").appendChild(backgroundCap2);

  let paragrafo = document.createElement("p");
  paragrafo.innerHTML =
    "A principal fonte de água potável da cidade está poluída por despejo industrial e lixo. Precisamos cuidar disso. <br><br> Opção 1: Criar um programa de despoluição do rio. <br><br> Opção 2: Construir uma estação de tratamento e privatizar a gestão.";
  document.getElementById("chapter2").appendChild(paragrafo);

  let div = document.createElement("div");
  div.id = "divBtnOpsCap2";
  document.getElementById("chapter2").appendChild(div);

  let btnOption1 = document.createElement("button");
  btnOption1.className = "btnGame";
  btnOption1.id = "btnOp1Cap2";
  btnOption1.textContent = "Opção 1";
  btnOption1.onclick = function () {
    statusBar.saude += 10;
    statusBar.ambiente += 15;
    statusBar.economia -= 3;

    atualizarBar();
    op1Chapter2();
    console.log(statusBar);
  };
  document.getElementById("chapter2").appendChild(btnOption1);

  let btnOption2 = document.createElement("button");
  btnOption2.className = "btnGame";
  btnOption2.id = "btnOp2Cap2";
  btnOption2.textContent = "Opção 2";
  btnOption2.onclick = function () {
    statusBar.saude += 5;
    statusBar.ambiente += 8;
    statusBar.economia += 8;

    atualizarBar();
    op2Chapter2();
    console.log(statusBar);
  };
  document.getElementById("chapter2").appendChild(btnOption2);

  let imgChapter2 = document.createElement("img");
  imgChapter2.className = "imgGame";
  imgChapter2.id = "imgChapter2";
  imgChapter2.src = "imagens/aguaPoluida2_.png";
  document.getElementById("chapter2").appendChild(imgChapter2);
}

function op1Chapter2() {
  document.getElementById("chapter2").style.display = "none";

  escolhas.capitulo2 = "a";
  console.log(escolhas.capitulo2);

  let paragrafo = document.createElement("p");
  paragrafo.textContent =
    "O rio foi despoluído e a água está limpa, mas o programa de despoluição foi caro e demorado, o que afetou a economia.";
  document.getElementById("optionsChapter2").appendChild(paragrafo);

  statusBarra();

  let div = document.createElement("div");
  div.id = "divBtnCap3Op1";
  document.getElementById("optionsChapter2").appendChild(div);

  let btnChapter3 = document.createElement("button");
  btnChapter3.className = "btnGame";
  btnChapter3.id = "btnChapter3Op1";
  btnChapter3.textContent = "Capítulo 3";
  btnChapter3.onclick = chapter3;
  document.getElementById("optionsChapter2").appendChild(btnChapter3);

  let imgOption1 = document.createElement("img");
  imgOption1.className = "imgGame";
  imgOption1.id = "imgOption1Cap2";
  imgOption1.src = "imagens/despoluicaoRio.jpg";
  document.getElementById("optionsChapter2").appendChild(imgOption1);
}

function op2Chapter2() {
  document.getElementById("chapter2").style.display = "none";

  escolhas.capitulo2 = "b";
  console.log(escolhas.capitulo2);

  let paragrafo = document.createElement("p");
  paragrafo.textContent =
    "A água ficou mais limpa, reduzindo o impacto na saúde da população, mas o rio continua sendo poluído.";
  document.getElementById("optionsChapter2").appendChild(paragrafo);

  statusBarra();

  let div = document.createElement("div");
  div.id = "divBtnCap3Op2";
  document.getElementById("optionsChapter2").appendChild(div);

  let btnChapter3 = document.createElement("button");
  btnChapter3.className = "btnGame";
  btnChapter3.id = "btnChapter3Op2";
  btnChapter3.textContent = "Capítulo 3";
  btnChapter3.onclick = chapter3;
  document.getElementById("optionsChapter2").appendChild(btnChapter3);

  let imgOption2 = document.createElement("img");
  imgOption2.className = "imgGame";
  imgOption2.id = "imgOption2Cap2";
  imgOption2.src = "imagens/estacaoTratamento.jpg";
  document.getElementById("optionsChapter2").appendChild(imgOption2);
}

function chapter3() {
  document.getElementById("optionsChapter2").style.display = "none";
  document.getElementById("btnChapter3").style.display = "none";

  let backgroundCap3 = document.createElement("div");
  backgroundCap3.id = "backgroundCap3";
  document.getElementById("chapter3").appendChild(backgroundCap3);

  let paragrafo = document.createElement("p");
  paragrafo.innerHTML =
    "A cidade gera muito lixo e a coleta é ineficiente. <br><br> Opção 1: Criar um programa de reciclagem e educação ambiental. <br><br> Opção 2: Construir um grande aterro sanitário.";
  document.getElementById("chapter3").appendChild(paragrafo);

  let div = document.createElement("div");
  div.id = "divBtnOpsCap3";
  document.getElementById("chapter3").appendChild(div);

  let btnOption1 = document.createElement("button");
  btnOption1.className = "btnGame";
  btnOption1.id = "btnOp1Cap3";
  btnOption1.textContent = "Opção 1";
  btnOption1.onclick = function () {
    statusBar.saude += 10;
    statusBar.ambiente += 10;
    statusBar.economia += 8;

    atualizarBar();
    op1Chapter3();
    console.log(statusBar);
  };
  document.getElementById("chapter3").appendChild(btnOption1);

  let btnOption2 = document.createElement("button");
  btnOption2.className = "btnGame";
  btnOption2.id = "btnOp2Cap3";
  btnOption2.textContent = "Opção 2";
  btnOption2.onclick = function () {
    statusBar.saude -= 5;
    statusBar.ambiente -= 10;
    statusBar.economia -= 3;

    atualizarBar();
    op2Chapter3();
    console.log(statusBar);
  };
  document.getElementById("chapter3").appendChild(btnOption2);

  let imgChapter3 = document.createElement("img");
  imgChapter3.className = "imgGame";
  imgChapter3.id = "imgChapter3";
  imgChapter3.src = "imagens/lixoRua_.png";
  document.getElementById("chapter3").appendChild(imgChapter3);
}

function op1Chapter3() {
  document.getElementById("chapter3").style.display = "none";

  escolhas.capitulo3 = "a";
  console.log(escolhas.capitulo3);

  let paragrafo = document.createElement("p");
  paragrafo.textContent =
    "Gera empregos sustentáveis e reduz o lixo, mas exige tempo e investimento.";
  document.getElementById("optionsChapter3").appendChild(paragrafo);

  statusBarra();

  let div = document.createElement("div");
  div.id = "divBtnCap4Op1";
  document.getElementById("optionsChapter3").appendChild(div);

  let btnChapter4 = document.createElement("button");
  btnChapter4.className = "btnGame";
  btnChapter4.id = "btnChapter4Op1";
  btnChapter4.textContent = "Capítulo 4";
  btnChapter4.onclick = chapter4;
  document.getElementById("optionsChapter3").appendChild(btnChapter4);

  let imgOption1 = document.createElement("img");
  imgOption1.className = "imgGame";
  imgOption1.id = "imgOption1Cap3";
  imgOption1.src = "imagens/programaReciclagem.jpg";
  document.getElementById("optionsChapter3").appendChild(imgOption1);
}

function op2Chapter3() {
  document.getElementById("chapter3").style.display = "none";

  escolhas.capitulo3 = "b";
  console.log(escolhas.capitulo3);

  let paragrafo = document.createElement("p");
  paragrafo.textContent =
    "Melhora o serviço rapidamente, mas pode gerar custos altos para a população.";
  document.getElementById("optionsChapter3").appendChild(paragrafo);

  statusBarra();

  let div = document.createElement("div");
  div.id = "divBtnCap4Op2";
  document.getElementById("optionsChapter3").appendChild(div);

  let btnChapter4 = document.createElement("button");
  btnChapter4.className = "btnGame";
  btnChapter4.id = "btnChapter4Op2";
  btnChapter4.textContent = "Capítulo 4";
  btnChapter4.onclick = chapter4;
  document.getElementById("optionsChapter3").appendChild(btnChapter4);

  let imgOption2 = document.createElement("img");
  imgOption2.className = "imgGame";
  imgOption2.id = "imgOption2Cap3";
  imgOption2.src = "imagens/aterroSanitario.jpg";
  document.getElementById("optionsChapter3").appendChild(imgOption2);
}

function chapter4() {
  document.getElementById("optionsChapter3").style.display = "none";
  document.getElementById("btnChapter4").style.display = "none";

  let backgroundCap4 = document.createElement("div");
  backgroundCap4.id = "backgroundCap4";
  document.getElementById("chapter4").appendChild(backgroundCap4);

  let paragrafo = document.createElement("p");
  paragrafo.innerHTML =
    "Uma empresa quer derrubar parte da floresta para expandir a cidade. <br><br> Opção 1: Criar um parque ecológico e área de proteção ambiental. <br><br> Opção 2: Permitir o desmatamento com regras ambientais.";
  document.getElementById("chapter4").appendChild(paragrafo);

  let div = document.createElement("div");
  div.id = "divBtnOpsCap4";
  document.getElementById("chapter4").appendChild(div);

  let btnOption1 = document.createElement("button");
  btnOption1.className = "btnGame";
  btnOption1.id = "btnOp1Cap4";
  btnOption1.textContent = "Opção 1";
  btnOption1.onclick = function () {
    statusBar.saude += 5;
    statusBar.ambiente += 5;
    statusBar.economia += 10;

    atualizarBar();
    op1Chapter4();
    console.log(statusBar);
  };
  document.getElementById("chapter4").appendChild(btnOption1);

  let btnOption2 = document.createElement("button");
  btnOption2.className = "btnGame";
  btnOption2.id = "btnOp2Cap4";
  btnOption2.textContent = "Opção 2";
  btnOption2.onclick = function () {
    statusBar.saude -= 5;
    statusBar.ambiente -= 5;
    statusBar.economia += 10;

    atualizarBar();
    op2Chapter4();
    console.log(statusBar);
  };
  document.getElementById("chapter4").appendChild(btnOption2);

  let imgChapter4 = document.createElement("img");
  imgChapter4.className = "imgGame";
  imgChapter4.id = "imgChapter4";
  imgChapter4.src = "imagens/desmatamento_.png";
  document.getElementById("chapter4").appendChild(imgChapter4);
}

function op1Chapter4() {
  document.getElementById("chapter4").style.display = "none";

  escolhas.capitulo4 = "a";
  console.log(escolhas.capitulo4);

  let paragrafo = document.createElement("p");
  paragrafo.textContent =
    "Melhora o serviço rapidamente, mas pode gerar custos altos para a população.";
  document.getElementById("optionsChapter4").appendChild(paragrafo);

  statusBarra();

  let div = document.createElement("div");
  div.id = "divBtnFinalOp1";
  document.getElementById("optionsChapter4").appendChild(div);

  let btnResult = document.createElement("button");
  btnResult.className = "btnGame";
  btnResult.id = "btnFinalOp1";
  btnResult.textContent = "Ver Final";
  btnResult.onclick = resultado;
  document.getElementById("optionsChapter4").appendChild(btnResult);

  let imgOption1 = document.createElement("img");
  imgOption1.className = "imgGame";
  imgOption1.id = "imgOption1Cap4";
  imgOption1.src = "imagens/parqueEcologico.jpg";
  document.getElementById("optionsChapter4").appendChild(imgOption1);
}

function op2Chapter4() {
  document.getElementById("chapter4").style.display = "none";

  escolhas.capitulo4 = "b";
  console.log(escolhas.capitulo4);

  let paragrafo = document.createElement("p");
  paragrafo.textContent =
    "Mantém o crescimento econômico, mas prejudica a biodiversidade e o equilíbrio climático.";
  document.getElementById("optionsChapter4").appendChild(paragrafo);

  statusBarra();

  let div = document.createElement("div");
  div.id = "divBtnFinalOp2";
  document.getElementById("optionsChapter4").appendChild(div);

  let btnResult = document.createElement("button");
  btnResult.className = "btnGame";
  btnResult.id = "btnFinalOp2";
  btnResult.textContent = "Ver Final";
  btnResult.onclick = resultado;
  document.getElementById("optionsChapter4").appendChild(btnResult);

  let imgOption2 = document.createElement("img");
  imgOption2.className = "imgGame";
  imgOption2.id = "imgOption2Cap4";
  imgOption2.src = "imagens/desmatamentoRegras.jpg";
  document.getElementById("optionsChapter4").appendChild(imgOption2);
}

function resultado() {
  document.getElementById("optionsChapter4").style.display = "none";
  document.getElementById("btnResultado").style.display = "none";

  let paragrafo = document.createElement("p");
  paragrafo.className = "paragrafoResult";

  if (
    escolhas.capitulo1 === "a" &&
    escolhas.capitulo2 === "a" &&
    escolhas.capitulo3 === "a" &&
    escolhas.capitulo4 === "a"
  ) {
    paragrafo.textContent =
      "Cidade Sustentável: Você equilibrou meio ambiente e saúde com progresso econômico. Green Life City se torna referência em sustentabilidade.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultGood = document.createElement("img");
    imgResultGood.className = "imgGame imgResult";
    imgResultGood.src = "imagens/cenarioBom.jpg";
    document.getElementById("resultado").appendChild(imgResultGood);
  } else if (
    escolhas.capitulo1 === "b" &&
    escolhas.capitulo2 === "b" &&
    escolhas.capitulo3 === "b" &&
    escolhas.capitulo4 === "b"
  ) {
    paragrafo.textContent =
      "Cidade Poluída e Doente: Decisões ruins levaram a mais doenças, desmatamento e desastres ambientais. A população de Green Life City sofre.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultBad = document.createElement("img");
    imgResultBad.className = "imgGame imgResult";
    imgResultBad.src = "imagens/cenarioRuim.jpg";
    document.getElementById("resultado").appendChild(imgResultBad);
  } else if (
    escolhas.capitulo1 === "a" &&
    escolhas.capitulo2 === "a" &&
    escolhas.capitulo3 === "b" &&
    escolhas.capitulo4 === "b"
  ) {
    paragrafo.textContent =
      "Cidade Poluída e Doente: Decisões ruins levaram a mais doenças, desmatamento e desastres ambientais. A população de Green Life City sofre.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultBad = document.createElement("img");
    imgResultBad.className = "imgGame imgResult";
    imgResultBad.src = "imagens/cenarioRuim.jpg";
    document.getElementById("resultado").appendChild(imgResultBad);
  } else if (
    escolhas.capitulo1 === "a" &&
    escolhas.capitulo2 === "b" &&
    escolhas.capitulo3 === "b" &&
    escolhas.capitulo4 === "a"
  ) {
    paragrafo.textContent =
      "Cidade Poluída e Doente: Decisões ruins levaram a mais doenças, desmatamento e desastres ambientais. A população de Green Life City sofre.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultBad = document.createElement("img");
    imgResultBad.className = "imgGame imgResult";
    imgResultBad.src = "imagens/cenarioRuim.jpg";
    document.getElementById("resultado").appendChild(imgResultBad);
  } else if (
    escolhas.capitulo1 === "a" &&
    escolhas.capitulo2 === "b" &&
    escolhas.capitulo3 === "b" &&
    escolhas.capitulo4 === "b"
  ) {
    paragrafo.textContent =
      "Cidade Poluída e Doente: Decisões ruins levaram a mais doenças, desmatamento e desastres ambientais. A população de Green Life City sofre.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultBad = document.createElement("img");
    imgResultBad.className = "imgGame imgResult";
    imgResultBad.src = "imagens/cenarioRuim.jpg";
    document.getElementById("resultado").appendChild(imgResultBad);
  } else if (
    escolhas.capitulo1 === "b" &&
    escolhas.capitulo2 === "a" &&
    escolhas.capitulo3 === "b" &&
    escolhas.capitulo4 === "a"
  ) {
    paragrafo.textContent =
      "Cidade Poluída e Doente: Decisões ruins levaram a mais doenças, desmatamento e desastres ambientais. A população de Green Life City sofre.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultBad = document.createElement("img");
    imgResultBad.className = "imgGame imgResult";
    imgResultBad.src = "imagens/cenarioRuim.jpg";
    document.getElementById("resultado").appendChild(imgResultBad);
  } else if (
    escolhas.capitulo1 === "b" &&
    escolhas.capitulo2 === "a" &&
    escolhas.capitulo3 === "b" &&
    escolhas.capitulo4 === "b"
  ) {
    paragrafo.textContent =
      "Cidade Poluída e Doente: Decisões ruins levaram a mais doenças, desmatamento e desastres ambientais. A população de Green Life City sofre.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultBad = document.createElement("img");
    imgResultBad.className = "imgGame imgResult";
    imgResultBad.src = "imagens/cenarioRuim.jpg";
    document.getElementById("resultado").appendChild(imgResultBad);
  } else if (
    escolhas.capitulo1 === "b" &&
    escolhas.capitulo2 === "b" &&
    escolhas.capitulo3 === "a" &&
    escolhas.capitulo4 === "b"
  ) {
    paragrafo.textContent =
      "Cidade Poluída e Doente: Decisões ruins levaram a mais doenças, desmatamento e desastres ambientais. A população de Green Life City sofre.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultBad = document.createElement("img");
    imgResultBad.className = "imgGame imgResult";
    imgResultBad.src = "imagens/cenarioRuim.jpg";
    document.getElementById("resultado").appendChild(imgResultBad);
  } else if (
    escolhas.capitulo1 === "b" &&
    escolhas.capitulo2 === "b" &&
    escolhas.capitulo3 === "b" &&
    escolhas.capitulo4 === "a"
  ) {
    paragrafo.textContent =
      "Cidade Poluída e Doente: Decisões ruins levaram a mais doenças, desmatamento e desastres ambientais. A população de Green Life City sofre.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultBad = document.createElement("img");
    imgResultBad.className = "imgGame imgResult";
    imgResultBad.src = "imagens/cenarioRuim.jpg";
    document.getElementById("resultado").appendChild(imgResultBad);
  } else {
    paragrafo.textContent =
      "Cidade Sustentável: Você equilibrou meio ambiente e saúde com progresso econômico. Green Life City se torna referência em sustentabilidade.";
    document.getElementById("resultado").appendChild(paragrafo);

    let imgResultGood = document.createElement("img");
    imgResultGood.className = "imgGame imgResult";
    imgResultGood.src = "imagens/cenarioBom.jpg";
    document.getElementById("resultado").appendChild(imgResultGood);
  }

  // document.getElementById("resultado").appendChild(paragrafo);
}
