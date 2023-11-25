const img = fetch ('imagem.jpg');

img.then(r => r.blob())
.then((body) => {
  const blobURL = URL.createObjectURL(body);
  const imgDom = document.querySelector('.imagem');
  imgDom.src = blobURL
})