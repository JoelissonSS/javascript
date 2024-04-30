const listCpf = document.querySelectorAll('.cpf li');

const cpfs = [...listCpf].map((item)=>item.innerText);
const regex = /(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{2})/g;

function limparCPF(cpf){
  return cpf.replace(regex, '$1.$2.$3-$4')
}
cpfs.map(item => console.log(limparCPF(item)))
