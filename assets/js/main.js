let range = document.getElementById('range');
let selector = document.getElementById('selector');
let input = document.getElementById('input');
let output = document.getElementById('output');

function changeFontSize() {
  output.innerHTML = input.value;

  output.style.fontSize = range.value + 'px';

  output.style.fontFamily = selector.value;
}