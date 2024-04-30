const sec = document.querySelector('.bitcoin')
setInterval(function refreshBitCoin() {
  fetch("https://www.blockchain.com/ticker")
  .then(r => r.json())
  .then((b) => sec.innerHTML = "o valor de compra do bitcoin é de:" + b.BRL.buy);
}, 3000)
