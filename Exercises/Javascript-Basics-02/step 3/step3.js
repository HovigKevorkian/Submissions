var inputBox = document.getElementById('name');

inputBox.onkeyup = function() {
  document.getElementById('text').innerHTML = inputBox.value;
};
