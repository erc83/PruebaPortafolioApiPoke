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
        $('#weight').text(`Peso: ${response.weight} [Kg]`)
        createChart(response)
    });    
  })
});


function createChart(data) {
  var cleanData = data.stats.map(function(info) {
    return { label: info.stat.name, y: info.base_stat }
  })
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light1", // "light2", "dark1", "dark2"
    animationEnabled: false, // change to true		
    title:{
      text: "Pokemon Stats"
    },
    data: [
      {
      // Change type to "bar", "area", "spline", "pie",etc.
      type: "column",
      dataPoints: cleanData
      }
    ]
  });
  chart.render();
}

