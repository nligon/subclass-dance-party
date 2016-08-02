var gamePlay;
$(document).ready(function() {
  window.movers = [];
  var points = 0;


  $('.start-button').on('click', function(event) {
    /* This function sets up the click handlers for the create-mover
     * buttons on AwesomePants.html. You should only need to make one small change to it.
     * As long as the "data-mover-maker-function-name" attribute of a
     * class="addmoverButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the mover.
     */

    /* moverMakerFunctionName is a string which must match
     * one of the mover maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    $('.start-button').addClass('hidden');
    var moverMakerFunction = AsteroidMover;

    gamePlay = setInterval(function() {
      var mover = new moverMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );

      $(mover.$node).click(function() {
        $(mover.$node).remove();
        points++;
        $('.pointsShower').text('Points: ' + points);
      });
      $('body').append(mover.$node);
    }, 2000);
  });

  // setInterval(function() {
  //   new AsteroidMover();
  // }, 2000);


});
