// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
// function createButton(b = 'blue', c = 'red') {
//   const buttonElement = document.createElement('button');

//   let {backgroundColor:, color} = buttonElement.style
//   backgroundColor = b
//   color = c
//   console.log(buttonElement.style.backgroundColor)
//   return buttonElement;
// } 

// const redButton = createButton();
// // console.log(redButton.style.backgroundColor)
// // console.log(redButton.style.color)

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];
comidas.push(...frutas)
console.log(comidas)