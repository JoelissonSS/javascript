function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    text,
    element,
  };
}

const btnAzul = createButton('azul');

console.log(btnAzul);
