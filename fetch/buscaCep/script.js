function buscarCep() {
  const cep = document.querySelector('input[name="cep"]');

  
  let url;
  
  !cep.value
    ? alert("insira um cep")
    : (url = `https://viacep.com.br/ws/${cep.value}/json/`);

  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      if (response.erro === true) {
        alert('insira um cep valido');
      } else (
        document.querySelector('input[name="logradouro"]').value = response.logradouro,
        document.querySelector('input[name="bairro"]').value = response.bairro,
        document.querySelector('input[name="localidade"]').value = response.localidade,
        document.querySelector('input[name="uf"]').value = response.uf
      )
    });
    
}
