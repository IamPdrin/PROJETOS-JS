var listaFilmes = []

listaFilmes[0] = 'https://upload.wikimedia.org/wikipedia/pt/1/1b/Schoolrockposter.jpg'
listaFilmes[1] = 'https://static.wixstatic.com/media/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg/v1/fill/w_640,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg'
listaFilmes[2] = 'https://www.europanet.com.br/superposter/images/vejapordentro/45724/45724.jpg'
listaFilmes[3] = 'https://media.fstatic.com/VR8ExKTcPSBTKmHpEL5i9phrE0I=/322x478/smart/filters:format(webp)/media/movies/covers/2017/08/7909-1.jpg'
listaFilmes[4] = 'https://br.web.img3.acsta.net/medias/nmedia/18/79/23/02/20073059.jpg'

//Desafio 3 (video): Crie uma segunda lista que armazene o nome dos filmes:
var nomeFilmes = []
 
nomeFilmes[0] = 'Escola do Rock'
nomeFilmes[1] = 'A chegada'
nomeFilmes[2] = 'Homem-Aranha no Aranhaverso'
nomeFilmes[3] = '10 coisas que eu odeio em você'
nomeFilmes[4] = 'Matrix: Reloaded'

/*
for (var i = 0; i < listaFilmes.length; i++){
  document.write('<img src=' + listaFilmes[i] + ' width = "200px" height="200px">')
}
*/

document.write('<div class="container-filmes">')

//Desafio 1 (video): Transforme o FOR em While:
var i = 0
while (i < listaFilmes.length){
    //Desafio 2 (video): Faça com que o url contenha, obrigatoriamente, o .jpg no final do código:
    if (listaFilmes[i].endsWith('jpg') || listaFilmes[i].endsWith('jpeg')){
        document.write('<div class="filmes">')
        document.write('<img src=' + listaFilmes[i] + ' width = "200px" height="200px">')
        document.write('<b><p style = "color: white">' + nomeFilmes[i] + '</p></b>')
        document.write('</div>')
    }
    else {
        document.write('<p>A url adicionada não se refere a uma imagem! Tente adicionar outro endereço.</p>')
    }
      i++
}
document.write('</div></div>')








