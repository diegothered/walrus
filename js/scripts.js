$(document).ready(function() {
  $(".clickable-suit").click(function() {
    $(".walrus-showing").slideToggle();
    $(".walrus-hidden").slideToggle();
  });

  $(".clickable-fatman").click(function() {
    $(".gif-show").slideToggle();
    $(".gif-hide").slideToggle();
  });
  $("button#green").click(function() {

    $("body").toggleClass("green-background");
  });
})

  // $
// $(document).ready(function() {
//   $("h1").click(function() {
//   alert("This is a header.");
//   });
//
//   $("p").click(function() {
//     alert("This is a paragraph.")
//   });
//
//   $("img").click(function() {
//     alert("This is an image.")
//   });
// })
