// Intialize the DOM
$(document).ready(documentReady);

// run on document.ready
function documentReady (){
  // Button press event listener
  $('.color-button').on('click', appendColorCube);
  // Cube clicked event listener
  $('.container').on('click', '.color-cube', removeColorCube);
} // end documentReady

// Add a cube to the DOM of the color button clicked
function appendColorCube() {
  var colorOfCube = $(this).data('color');
  $('.container').append("<div class='color-cube " + colorOfCube + "'></div>");
  // Update the counter for the current cube count
  updateCounter(colorOfCube);
} // end appendColorCube

// Remove a cube that is selected from the DOM
function removeColorCube () {
  var selectedCube = $(this).attr('class').split(' ')[1];
  $(this).remove();
  // Update the counter for the current cube count
  updateCounter(selectedCube);
} // end removeColorCube

// function updateCounter - updates the cube count to current number of cubes
function updateCounter (color) {
  var cubeCount = $("." + color).length; // counts the number elements on the DOM of class 'color'
  $('#' + color).text(cubeCount);
} // end updateCounter
