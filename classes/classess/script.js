class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
    return this;
  }
  static acelerate(vel) {
    let currentVel = +vel;
    alert(currentVel);
  }
  get element() {
    const type = this._elementType || 'div'

    const garagem = document.querySelector('.garagem');
    const carro = document.createElement(type);
    carro.innerText = this.model;
    carro.style.background = this.color;
    garagem.appendChild(carro);
    return carro;
  }
  set element(type){
    this._elementType = type
  }
}
const civic = new Car('civic', 'blue');
civic.element;
civic._elementType = 'section'
civic.element
