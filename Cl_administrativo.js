import Cl_persona from "./Cl_persona.js";

export default class Cl_administrativo extends Cl_persona {
  constructor(cedula, edad, nivel) {
    super(cedula, edad);
    this.nivel = nivel;
  }
  incentivo() {
    if (this.esMayorDeEdad())
      if (this.nivel > 1) return 100;
      else return 50;
    else return 0;
  }
  sueldo() {
    return this.sueldoBase() + this.incentivo();
  }
}