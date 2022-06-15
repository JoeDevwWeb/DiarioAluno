// Botao do sidebar
$(document).ready(function(){
    
    $('#btnOpen').click(function(){
            $('.barraferramentas').css("left","0");
    });
    $('#btnClose').click(function(){
        $('.barraferramentas').css("left","-240px");
  });
  });


  findTransactions();

  function findTransactions() {
      setTimeout(() => {
          addTransactionsToScreen(fakeTransactions);
      }, 100)
  }
  
  function addTransactionsToScreen(transactions) {
      const orderedList = document.getElementById('transactions');
  
      transactions.forEach(transaction => {
          const li = document.createElement('li');

        //   Div principal
          const titulo = document.createElement('div');
          titulo.classList.add("projetos");
          li.appendChild(titulo);

        // div da foto do projeto
          const divfoto = document.createElement('div');
          divfoto.classList.add("imgProjeto");
          titulo.appendChild(divfoto);


          const divtexto = document.createElement('div');
          divtexto.classList.add("TextProjeto");
          titulo.appendChild(divtexto);

          const img = document.createElement('img');
          img.src = transaction.url;
          divfoto.appendChild(img);

          const texto = document.createElement('h2');
          texto.innerHTML =  transaction.titulo;
          divtexto.appendChild(texto);

          const type = document.createElement('p');
          type.innerHTML = transaction.transactionType;
          divtexto.appendChild(type);
  
  
          orderedList.appendChild(li);
      });
  }
  
  const fakeTransactions = [{
        titulo: 'Projeto de robotica',
        url: '../imagens/perfil.jpg',
        transactionType: 'falando sobre'
  }, {
        titulo: 'Projeto de robotica',
        url: '../imagens/perfil.jpg',
        transactionType: 'Supermercado'
  }, {
        titulo: 'Projeto de robotica',
        url: '../imagens/perfil.jpg',
        transactionType: 'Supermercado'
  }, {
        titulo: 'Projeto de robotica',
        url: '../imagens/perfil.jpg',
        transactionType: 'Supermercado'
  }]

  addUserToScreen();

  
  function addUserToScreen() {
          const nomeUser = ("Marcos");
          const User = document.getElementById('userName')
          User.innerHTML = (nomeUser);
         
  }
  
  

