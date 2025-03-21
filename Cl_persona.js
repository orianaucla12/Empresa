export default class Cl_persona {
    constructor(cedula, edad) {
      this.cedula = cedula;
      this.edad = edad;
    }
    set cedula(cedula) {
      this._cedula = cedula;
    }
    get cedula() {
      return this._cedula;
    }
    set edad(edad) {
      this._edad = edad;
    }
    get edad() {
      return this._edad;
    }
    esMayorDeEdad() {
      return this.edad >= 18;
    }
    sueldoBase() {
      return 150;
    }
  }