//Conversor de Moedas (feito durante a aula):

/*
var valorEmDolar = 30;
var cotacaoDolar = 4.91;

var valorEmReal = valorEmDolar * cotacaoDolar;
alert("R$ " + valorEmReal.toFixed(2));
*/

/*Desafio 1 (vídeo): altere o código para que realize a conversão de 'Tether' para real: */

var valorEmTether = 30;
var cotacaoTether = 4.91;

var valorEmReal = valorEmTether * cotacaoTether;
alert("R$ " + valorEmReal.toFixed(2));


/*Desafio 2 (vídeo): altere o código para que exiba, além do valor convetido, o nome da pessoa:*/

var valorEmDolar = 30;
var cotacaoDolar = 4.91;
var nome = "Rafaela";

var valorEmReal = valorEmDolar * cotacaoDolar;
alert(
  "Olá, " +
    nome +
    ".\nO valor de US$ " +
    valorEmDolar +
    " em reais é: R$ " +
    valorEmReal.toFixed(2)
);


/*Desafio 3 (vídeo): altere o código para converter anos luz em metros, além disso, altere o background e o título da página para 'Conversor Interestelar':*/

var anoLuz = 50;
var dtnAlfaCentauri = 4.4;
var metroLuz = 9460536207068016;

var metros = anoLuz * metroLuz;
var metrosAlfaCentauri = dtnAlfaCentauri * metroLuz;

alert("O valor de " + anoLuz + " anos-luz em metros é: " + metros);

alert(
  "A distância entre a Terra e a estrela Alfa Centauri é de " +
    dtnAlfaCentauri +
    " anos-luz, que equivale, em metros, a: " +
    metrosAlfaCentauri
);

//Desafios:

/*Desafio 1 (extrasPage): Adicionar outras moedas para converter:*/

var valorEmDolar = 30;
var cotacaoDolar = 4.91;

var valorEmEuro = 30;
var cotacaoEuro = 5.25;

var valorEmIene = 30;
var cotacaoIene = 0.32;

var valorEmReal = valorEmDolar * cotacaoDolar;
alert(valorEmDolar + " dolares em reais: R$ " + valorEmReal.toFixed(2));

var valorEmRealE = valorEmEuro * cotacaoEuro;
alert(valorEmEuro + " euros em reais: R$ " + valorEmRealE.toFixed(2));

var valorEmRealI = valorEmIene * cotacaoIene;
alert(valorEmIene + " ienes em reais: R$ " + valorEmRealI.toFixed(2));


/*Desafio 2 (extrasPage): Desenvolver um conversor de temperaturas entre Fahrenheit, Kelvin e Celsius: */


//Celcius:
var celcius = 30;
var fahrenheit = (celcius * 9) / 5 + 32;
var kelvin = celcius + 273.15;

alert(celcius + "° Celcius em Farenheit é: " + fahrenheit + " °F");

alert(celcius + "° Celcius em Kelvin é: " + kelvin + " K");

//Fahrenheit:
var fahrenheitF = 77;
var celciusF = (fahrenheitF - 32) * 5/9;
var kelvinF = (fahrenheitF - 32) * 5/9 + 273.15;

alert(fahrenheitF + "° Farenheit em Celcius é: " + celciusF + " °C");

alert(fahrenheitF + "° Farenheit em Kelvin é: " + kelvinF + " K");

//Kelvin:
var kelvinK = 300;
var fahrenheitK = (kelvinK - 273.15) * 9/5 + 32;
var celsiusK = (kelvinK - 273.15);

alert(kelvinK + " Kelvin em fahrenheit é: " + fahrenheitK.toFixed(2) + " °F");

alert(kelvinK + " Kelvin em celsius é: " + celsiusK.toFixed(2) + " °C");



/*Desafio 3 (extrasPage): Inserir uma linha ao projeto para exibir o valor em Bitcoin: */

var valorEmDolar = 30;
var cotacaoDolar = 4.91;

var valorEmBitcoin = 5;
var cotacaoBitcoin = 178402;

var valorEmReal = valorEmDolar * cotacaoDolar;
alert("R$ " + valorEmReal.toFixed(2));

var valorEmRealB = valorEmBitcoin * cotacaoBitcoin;
alert(valorEmBitcoin + " Bitcoins em reais é: R$ " + valorEmRealB.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

