$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
  });
  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Bork!</li>");
  });
});
