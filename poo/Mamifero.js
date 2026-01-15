//definicion de una clase, la clase es una plantilla, o molde, o plano
//de la cual vamos a crear nuestros objetos
export class Mamifero {
    //propiedades, son lo que describe al objeto
    _pelo;
    edad;
    producenLeche;
    numPatas;
    cuernos;
    vertebrados;
    peso;
    sangreCaliente;

    //*es el metodo que se ejecuta cuando se crea un nuevo objeto
    //* usando la palabra reservada new*
    //* ponemos todas las propiedades que queremos que sean fijadas
    //* al momento de crear el objeto
    constructor(_pelo,producenLeche,cuernos,edad,numPatas,peso,sangreCaliente){
        this._pelo = _pelo;
        this.producenLeche = producenLeche;
        this.edad   = edad;
        this.numPatas = numPatas;
        this.cuernos = cuernos;
        this.sangreCaliente = sangreCaliente;

    }
    //el set nos sirve para cambiar o actualizar el valor de una propiedad
    set pelo(Pelo){
        this._pelo = Pelo;
    }
    //el get sirve para obtener el valor de una propiedad
    get getPelo(){
        return this._pelo;
    }

    set setProducenLeche(producenLeche){
        this.producenLeche = producenLeche;

    }

    get getProducenLeche(){
        return this.producenLeche;
    }
    set setEdad(Edad){
        this.Edad=Edad;
    }
    get getEdad(){
        return this.Edad;
    }
   set setNumPatas(numPatas){
    this.numPatas = numPatas;
  }

  get  getNumPatas(){
    return this.numPatas;
  }

  set setCuernos(cuernos){
    this.cuernos = cuernos;
  }

  get getCuernos(){
    return this.cuernos;
  }

  set setSangreCaliente(sangreCaliente){
    this.sangreCaliente = sangreCaliente;
  }

  get getSangreCaliente(){
    return this.sangreCaliente;
  }

  set setPeso(peso){
    this.peso = peso;
  }

  get getPeso(){
    return this.peso
  }
  /* metodos de instancia
    son metodos que siempre se ejecutan desde un objeto
    primero hay que crear un objeto para poder ejecutar el metodo  
    */
   hacerSonido(){
        return `Sonidos de mamifero de pelo ${this.getPelo}`

   }
   /*   metodos estaticos
        son metodos que se ejecutan desde la clase
        o sea no es necesario crear un objeto para poder utilizarlos
    */
   static tieneCuernos(animal){
        if(animal.getCuernos > 0)return true;
            return false
        }    
}
/* crear un objeto */
const ornitorrinco = new Mamifero("verde",true,0,5,4,2.5,true);
const perro = new Mamifero("cafe",true,2,6,4,20,true);
//console.log(ornitorrinco)
//console.log(perro)
// console.log(ornitorrinco.getEdad)
//set
// ornitorrinco.setEdad = 15;
//get
// console.log(ornitorrinco.getEdad)
//probar metodo de instancia
// console.log(perro.hacerSonido())
// console.log(ornitorrinco.hacerSonido())
// metodos estaticos
// console.log(Mamifero.tieneCuernos(perro))
// console.log(Mamifero.tieneCuernos(ornitorrinco))