
$("#comprobar").click(function(){
 
  $.get("http://localhost/activity4/default.jpg")
    .done(function() { 
      alert("existe");
    })
    .fail(function() { 
      alert("no existe");
      $('#image').attr('src',"http://localhost/activity4/change.png");

    });

}); 