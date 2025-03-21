import Cl_persona from "./Cl_persona.js";

export default class Cl_obrero extends Cl_persona {
  constructor(cedula, edad, cntHijos) {
    super(cedula, edad);
    this.cntHijos = cntHijos;
  }
  bono() {
    return this.cntHijos < 3 ? 50 : 70;
  }
  sueldo() {
    return this.sueldoBase() + this.bono();
  }
}