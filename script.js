// JavaScript

//console.log(document.getElementById('myColor').value);

const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

//document.getElementById('bodyText').textContent = document.getElementById('myColor').value;

text.textContent = color.value;

