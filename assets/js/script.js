$(function(){
  // Déclaration des variables
  var articleName, articleRef, articlePrice, articleQuantity = 1, article;
  var panier = [], wishlist = [];
  var tr, _tr = '</tr>', td1, td2, td3, td4, td5, _td = '</td>';
  var total = [], prixTotal = 0;
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
    td3 = '<td id="' + articleRef + 'Quantity" class="article_quantity">';
    td4 = '<td class="' + articleRef + 'Price article_price">';
    td5 = '<td>\n<button id="deleteButton" class="btn btn-light mx-auto"></button>\n</td>';
    // Vérification si l'article est déjà dans le panier
    if (panier.includes(articleName)){
      // Si oui, incrémentation de la quantité
      articleQuantity = Number($('#' + articleRef + 'Quantity').html()) + 1
      articlePrice = (articlePrice.slice(0, -2) * articleQuantity).toFixed(2) + ' €'
      $('#' + articleRef + 'Quantity').html(articleQuantity)
      $('.' + articleRef + 'Price').html(articlePrice)
    } else {
      // Si non, ajout d'un nouvel article au panier
      // Suppression du message du paneier vide à l'ajout du premier article
      if ($('#messagePanierVide').css('display', 'table-row')){
        $('#panierVide').hide()
      }
      articleQuantity = 1
      panier += article
      $('#modalPanier #panierVide').after(tr + '\n' + td1 + articleRef + _td + '\n' + td2 + articleName + _td + '\n' + td3 + articleQuantity + _td  + '\n' + td4 + articlePrice + _td + '\n' + td5 + '\n' +  _tr)
    }
    $('#deleteButton').click(function(){
      $(this).parent().parent().hide()
      // Problème : col-span 5 saute lors du .show()
      if (!($('#modalPanier tbody tr').is(':visible'))){
        $('#panierVide').show()
      }
    });
  });
  // Ajout à la Wishlist à l'appuie du bouton
  $('.boutonAchatWishlist').click(function(){
    // Récupération des informations de l'article
    articleName = $(this).parent().parent().siblings('.card-body').children('.designation').text()
    articleRef = ($(this).parent().parent().siblings('.card-body').children('h6').text()).slice(4)
    articlePrice = $(this).parent().siblings('.price').text()
    article = (articleName + '-' + articleRef + '-' + articlePrice + '-' + articleQuantity)
    // Création d'une nouvelle ligne si c'est un nouvel objet
    tr = '<tr id="' + articleRef +  'Wish" class="text-center article_panier_wish">';
    td1 = '<td class="' + articleRef + 'ReWishf article_ref_wish" scope="row">';
    td2 = '<td class="' + articleRef + 'NameWish article_name_wish">';
    td3 = '<td id="' + articleRef + 'QuantityWish" class="article_quantity_wish">';
    td4 = '<td class="' + articleRef + 'PriceWish article_price_wish">';
    td5 = '<td>\n<button id="deleteButton" class="btn btn-light mx-auto"></button>\n</td>';
    // Vérification si l'article est déjà dans la wishlist
    if (wishlist.includes(articleName)){
      // Si oui, incrémentation de la quantité
      articleQuantity = Number($('#' + articleRef + 'QuantityWish').html()) + 1
      articlePrice = (articlePrice.slice(0, -2) * articleQuantity).toFixed(2) + ' €'
      $('#' + articleRef + 'QuantityWish').html(articleQuantity)
      $('.' + articleRef + 'PriceWish').html(articlePrice)
    } else {
      // Si non, ajout d'un nouvel article à la wishlist
      // Suppression du message du paneier vide à l'ajout du premier article
      if ($('#messageWishlistVide').css('display', 'table-row')){
        $('#wishlistVide').hide()
      }
      articleQuantity = 1
      wishlist += article
      $('#modalWishlist #wishlistVide').after(tr + '\n' + td1 + articleRef + _td + '\n' + td2 + articleName + _td + '\n' + td3 + articleQuantity + _td  + '\n' + td4 + articlePrice + _td + '\n' + td5 + '\n' +  _tr)
    }
    $('#deleteButton').click(function(){
      $(this).parent().parent().hide()
    });
  });
  // Calcul du prix lors de la commande
  $('#boutonPanierCheckout').click(function(){
    // Récupération des prix de tous les articles du panier
    total = $('.article_panier .article_price').map(function(){ return $(this).text().slice(0, -2); }).get().join("-");
    total = (total.replace(/\./g, ',')).split('-')
    // Somme de tous les prix du panier
    for (var i = 0; i < total.length; i++){
      total[i] = parseInt(total[i]);
      prixTotal = prixTotal + total[i];
    }
    alert('Votre total est de : ' + prixTotal + ' €')
  });
});
