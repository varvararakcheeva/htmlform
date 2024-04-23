const input = document.querySelector('#input');
const label = document.querySelector('#label').addEventListener('click', function(){
  input.focus();
})

const checkbox = document.querySelector('#checkbox');
const labelChek = document.querySelector('#labelCheck').addEventListener('click', function(){
  checkbox.classList.toggle('checked');
})





