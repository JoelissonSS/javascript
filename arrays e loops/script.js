const anosVitoria = [1959, 1962, 1970, 1994, 2002]

anosVitoria.forEach((a)=>{
  console.log(`brasil ganhou no ano de ${a}`)
})

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var frutaE
for(let i= 1; i <= frutas.length; i++){
  if (i === frutas.length){
    frutaE = frutas[frutas.length - 1];
    console.log(frutaE)
  }
}