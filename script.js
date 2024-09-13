const textoDoInput = document.getElementById('texto-input');
const botao = document.getElementById('botao');
const textoAviso = document.getElementById('texto-aviso');

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const textoOriginal = textoDoInput.value
    .toUpperCase()
    .replace(/[^a-zA-Z0-9]/g, '');
  if (textoDoInput.value === '') {
    textoAviso.innerText = 'Por favor, digite uma palavra !';
  } else if (textoOriginal === textoOriginal.split('').reverse().join('')) {
    textoAviso.innerText = `${textoDoInput.value} é um Palíndromo`;
  } else {
    textoAviso.innerHTML = `${textoDoInput.value} não é um Palíndromo`;
  }
  textoDoInput.addEventListener('click', () => {
    textoAviso.innerText = '';
  });
});
