import { Mamifero } from "./Mamifero.js";

class gato extends Mamifero{
    dueño;
    raza;
    bigotes;
    dientes;
    nombre;

    constructor(_pelo,producenLeche,cuernos,edad,numPatas,peso,sangreCaliente,dueño,raza,bigotes,dientes,nombre){
        super(_pelo,producenLeche,cuernos,edad,numPatas,peso,sangreCaliente)
        this.dueño = dueño;
        this.raza = raza;
        this.bigotes = bigotes;
        this.dientes = dientes;
        this.nombre = nombre;
    }
    get dueño() {
  return this.dueño;
}

set dueño(value) {
  this.dueño = value;
}

get raza() {
  return this.raza;
}

set raza(value) {
  this.raza = value;
}

get bigotes() {
  return this.bigotes;
}

set bigotes(value) {
  this.bigotes = value;
}

get dientes() {
  return this.dientes;
}

set dientes(value) {
  this.dientes = value;
}

get nombre() {
  return this.nombre;
}

set nombre(value) {
  this.nombre = value;
}

//@override
hacerSonido(){
        return `Hola soy ${this.nombre} mi dueño es ${this.dueño} mi raza es ${this.raza} 
        ${this.dientes == 30? "y tengo todos mis dientes":"Me faltan algunos dientes"}
        y hago ${this.maullar()}`

    }
maullar(){
    return "miau"
}


}
const nami = new gato("tricolor", false, 0,0.5,4,1.5,true,"Josue","Carey",true,20,"nami")
const july = new gato("gris y blanco",false,0,4,4,3.8,true,"Mariana","felino encontrado",true,30,"july")

console.log(nami.hacerSonido())
console.log(july.hacerSonido())
console.log(nami.getPelo)
nami.setPelo = "naranja y gris"
console.log(nami.getPelo)