$(document).ready(function () {

    $('.categorias .categoria_item[category="all"]').addClass('categoria_act');

    $('.categoria_item').click(function(){
        var catImages = $(this).attr('category');

        
        $('.categoria_item').removeClass('categoria_act');
        $(this).addClass('categoria_act');

        $('.images_item').css('transform','scale(0)');
        function hideProduct(){
            $('.images_item').hide();
        }setTimeout(hideProduct,400);

       
        function showProduct(){
            $('.images_item[category="'+catImages+'"]').css('transform','scale(1)');    
            $('.images_item[category="'+catImages+'"]').show();
        }setTimeout(showProduct,400);

    })

    $('.categoria_item[category="all"]').click(function(){
        function showAllProduct(){
            $('.images_item').show();
            $('.images_item').css('transform','scale(1)');
        }setTimeout(showAllProduct,400);
    })

    $('.images_item img').click(function(){
      var imagen=$(this).attr('src');
  
      var titleImagen=$(this).attr('title');
      console.log(titleImagen)
      $('.recibir-imagen').attr('src',imagen);
      $('.modal-title').text(titleImagen);
      $('#mimodal').modal();

    })
});

