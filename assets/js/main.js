function changeFontSize() {
  let output = document.getElementById('output');

  output.innerHTML = document.getElementById('input').value;

  output.style.fontSize = document.getElementById('range').value + 'px';

  output.style.fontFamily = document.getElementById('selector').value;
}