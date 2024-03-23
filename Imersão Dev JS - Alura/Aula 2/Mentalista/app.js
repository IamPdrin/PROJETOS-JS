var numeroSecreto = Math.floor(Math.random() * 1000) + 1;

var cont = 0;

while(chute != numeroSecreto){
  
  var chute = prompt('Digite um número entre 1 e 1000:');
  
  cont = cont + 1;
  
  if(cont == 30){
    alert('Seu número de tentivas se esgotou: ' + cont + ' tentativas realizadas!');
    break;
  }
  
  if(chute == numeroSecreto){
    alert('Você acertou no ' + cont + '° chute!')
  } 
  else if (chute > numeroSecreto){
    alert('Errou, o número secreto é menor do que ' + chute + '\nQuantidade de chutes: ' + cont);
  }
  else if(chute < numeroSecreto){
    alert('Errou, o número secreto é maior do que ' + chute + '\nQuantidade de chutes: ' + cont);
  }  
}