  //Desafio 1 (video): faça com que o input aceite, somente, urls que possuem a extensão de imagem. Caso ele não possua, crie alguma solução. V
  //Desafio 2 (video): faça com que, ao clicar na tag img do poster, o usuário seja redirecionado ao trailer do respectivo filme no Youtube. V
  //Desafio 3 (video): desevolva, de uma maneira mais elaborada, o código em si. Fazendo com que ele armazene os endereços adicionados pelo usuário em listas. 

  function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value
    var trailerFilme = document.getElementById('trailer').value
    
    var filmes = []
    var trailer = []
    
    filmes.push(filmeFavorito)
    trailer.push(trailer)
    
    if (filmeFavorito.endsWith('jpg') || filmeFavorito.endsWith('jpeg')){
       var elementoListaFilmes = document.getElementById('listaFilmes')
       
       elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<a href =' + trailerFilme +' target="_blank"><img src=' + filmeFavorito + '></a>'
      
       document.getElementById('filme').value = ""
       document.getElementById('trailer').value = ""
      }
    else {
       var notAnImage = document.getElementById('listaFilmes')
      
       notAnImage.innerHTML = '<b><p style = "color: white">A url adicionada não possui as extensões que se referenciam a imagens</p></b>'
      }
  } 