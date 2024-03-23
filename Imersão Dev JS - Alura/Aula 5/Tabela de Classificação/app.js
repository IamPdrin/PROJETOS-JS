var listaJogadores  = [];
var elementoTabela = document.getElementById('tabelaJogadores');

function exibirNaTela(){
    elementoTabela.innerHTML = "";
    listaJogadores.forEach((jogador, index) => {
      console.log(jogador);
      elementoTabela.innerHTML += `
        <tr>
          <td>${jogador.nome}</td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>
          <td>${jogador.elo}</td>
          <td>${jogador.ponto}</td>
          <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
        </tr>
        `;
    });
}

function criarJogador(){
  var nomeJogador = document.getElementById('nomeJogador').value;
  var eloJogador = document.getElementById('elo').value;
  
  listaJogadores.push({
    nome: nomeJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    elo: eloJogador,
    ponto: 0
  });
  
  document.getElementById('nomeJogador').value = ""
  document.getElementById('elo').value = ""
  exibirNaTela();
}

function adicionarVitoria(index){
    listaJogadores[index].vitoria++;
    listaJogadores[index].ponto += 20;

    if (listaJogadores[index].ponto >= 100) {
        let elos = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Diamante", "Ascendente", "Imortal", "Radiante"];
        let atualElo = listaJogadores[index].elo;
        let proximoEloIndex = elos.indexOf(atualElo) + 1;

        if (proximoEloIndex < elos.length) {
            listaJogadores[index].elo = elos[proximoEloIndex];
            listaJogadores[index].ponto = 0; // Zera a pontuação
        }
    }

    exibirNaTela();
}


function adicionarEmpate(index){
    listaJogadores[index].empate++;
    listaJogadores[index].ponto++;
    exibirNaTela();
}


function adicionarDerrota(index){
    listaJogadores[index].derrota++;
    listaJogadores[index].ponto -= 10;    
    exibirNaTela();
}

function apagarJogadores(){
    listaJogadores.splice(0, listaJogadores.length);
    exibirNaTela();
}