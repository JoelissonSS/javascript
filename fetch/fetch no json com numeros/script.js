const list = document.querySelector('.list-numbers');

fetchList('./numbers.json');

async function fetchList(url) {
  const listResponse = await fetch(url);
  const listJSON = await listResponse.json();

  listJSON.forEach((number) => {
    createNumber(number)
  });
  function createNumber(num) {
    const li = document.createElement('li')
    li.innerText = num.numero
    list.appendChild(li)
  }
}
