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
  
          const divFoto = document.createAttribute('div');

          const titulo = document.createElement('div');
          titulo.classList.add("data");
          
          titulo.innerHTML = transaction.titulo;
          li.appendChild(titulo);

          const img = document.createElement('img');
          img.src = transaction.url;
          titulo.appendChild(img);

  
          const type = document.createElement('p');
          type.innerHTML = transaction.transactionType;
          titulo.appendChild(type);
  
  
          orderedList.appendChild(li);
      });
  }
  
  const fakeTransactions = [{
      titulo: 'Projeto de robotica',
      url: '../imagens/perfil.jpg',
      transactionType: 'Supermercado'
  }, {
      date: '2022-01-03',
      url: '../imagens/perfil.jpg',
      transactionType: 'Salário',
      description: 'Empresa A'
  }, {
      date: '2022-01-01',
      url: '../imagens/perfil.jpg',
      transactionType: 'Transporte',
      description: "Metrô ida e volta"
  }, {
      date: '2022-01-01',
      url: '../imagens/perfil.jpg',
      transactionType: 'Aluguel',
      description: "Mensalidade"
  }]

