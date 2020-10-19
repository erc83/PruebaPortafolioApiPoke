// Shorthand for $( document ).ready()
$(function() {

  $('button').click(function (event) {
    event.preventDefault()
    // console.log( "provando evento" );
      var pokeId = $('#pokeId').val()

    //sacado de postman y en relacion a la pokeapi
      var settings = {
      "url": `https://pokeapi.co/api/v2/pokemon/${pokeId}`,
      "method": "GET",
      };
      
      $.ajax(settings).done(function (response) {
        $('#name').text(response.name)
        $('img').attr('src', response.sprites['front_default'])
    });
  })
});