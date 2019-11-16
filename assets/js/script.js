$(function(){
  var articleName = '', articleRef = '', articlePrice = '';
  var panier = {nameOfArticle : articleName, refOfArticle : articleRef, priceOfArticle : articlePrice}, wishlist = []
  $('.boutonAchatPanier').click(function(){
    articleName = $(this).parent().parent().siblings('.card-body').children('.designation').text()
    articleRef = ($(this).parent().parent().siblings('.card-body').children('h6').text()).slice(4)
    articlePrice = $(this).parent().siblings('.price').text()
    console.log(articleName + ' ' + articleRef + ' ' + articlePrice)
    // Ne fonctionne pas
    panier = {nameOfArticle : articleName, refOfArticle : articleRef, priceOfArticle : articlePrice};
    //
    $('.articleName').text(articleName), $('.articleRef').text('#' + articleRef), $('.articlePrice').text(articlePrice);
    alert(panier)
  });
});
