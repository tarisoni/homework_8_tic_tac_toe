$(document).ready(function(){
  var status = "X";

  $(".container").on("click", ".col-4", function() {


    if ($(this).html() === "") {

      $(this).html(status);

      if (status === "X") {
        status = "O";

      } else {
        status = "X";
      }
    }
  });

});
