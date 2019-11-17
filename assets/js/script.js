$(function(){
  // Déclaration des variables
  var articleName, articleRef, articlePrice, articleQuantity = 1, article;
  var panier = [], wishlist = [];
  var tr, _tr = '</tr>', td1, td2, td3, td4, td5, _td = '</td>';
  // Ajout au panier à l'appuie du bouton
  $('.boutonAchatPanier').click(function(){
    // Récupération des informations de l'article
    articleName = $(this).parent().parent().siblings('.card-body').children('.designation').text()
    articleRef = ($(this).parent().parent().siblings('.card-body').children('h6').text()).slice(4)
    articlePrice = $(this).parent().siblings('.price').text()
    article = (articleName + '-' + articleRef + '-' + articlePrice + '-' + articleQuantity)
    // Création d'une nouvelle ligne si c'est un nouvel objet
    tr = '<tr id="' + articleRef +  '" class="text-center article_panier">';
    td1 = '<td class="' + articleRef + 'Ref article_ref" scope="row">';
    td2 = '<td class="' + articleRef + 'Name article_name">';
    td3 = '<td class="' + articleRef + 'Quantity article_quantity">';
    td4 = '<td class="' + articleRef + 'Price article_price">';
    td5 = '<td id="deleteButton">\n<div aria-hidden="true">&times;</div>\n</td>';
    // Vérification si l'article est déjà dans le panier
    if (panier.includes(articleName)){
      // Si oui, incrémentation de la quantité
      articleQuantity = $('.' + articleRef + 'Quantity').text()
      console.log(articleRef)
      articlePrice = (articlePrice.slice(0, -2) * articleQuantity).toFixed(2) + ' €'
      $('.' + articleRef + 'Quantity').html(articleQuantity)
      $('.' + articleRef + 'Price').html(articlePrice)
    } else {
      // Si non, ajout d'un nouvel article au panier
      // Suppression du message du paneier vide à l'ajout du premier article
      if ($('#messagePanierVide').css('display', 'table-row' )){
        $('#panierVide').hide()
      }
      articleQuantity = 1
      panier += article
      $('#modalPanier #panierVide').after(tr + '\n' + td1 + articleRef + _td + '\n' + td2 + articleName + _td + '\n' + td3 + articleQuantity + _td  + '\n' + td4 + articlePrice + _td + '\n' + td5 + '\n' +  _tr)
    }
  });
  // Calcul du prix lors de la commande
  // $('#boutonPanierCheckout').click(function(){
  //   total = $('.articlePanier .article_price').text()
  // });
});
