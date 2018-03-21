$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bork!</li>");
  });
  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>Mauw!</li>");
  });
  $("button#image-button").click(function() {
     $("#image-container").after('<img src="img/suh-dude.jpg" id="img" />')
     $("img#img").click(function() {
        $(this).remove();
     });
  });
});
