/**
 * En una empresa se conoce el nombre y edad de su personal, con un sueldo base de $150. 
    Trabajan obreros (1) y administrativos (2). Los obreros hasta con 3 hijos reciben $50 de 
    bono, con más de 3 hijos reciben $70. Los administrativos tienen nivel de estudio 
    (1=bachiller, 2=técnico, 3=universitario), y reciben un incentivo (sólo si son mayor de 
    edad) de $50 para bachilleres y $100 si tienen otro nivel.
 */

    import Cl_administrativo from "./Cl_administrativo.js";
    import Cl_obrero from "./Cl_obrero.js";
    
    let administrativo1 =new Cl_administrativo(1,15,1);
    let obrero1 = new Cl_obrero(222, 20, 2);
    let obrero2 = new Cl_obrero(333, 17, 0);
    let administrativo2 = new Cl_administrativo(444, 19, 3);
    let obrero3 = new Cl_obrero(555, 22, 5);

      let salida = document. getElementById("salida");
      salida.innerHTML = `
      ${administrativo1.incentivo()};sueldo ${administrativo1.sueldo()}
      <br>${obrero1.bono()};sueldo ${obrero1.sueldo()}
      <br>${obrero2.bono()}sueldo ${obrero2.sueldo()}
      
      <br>${administrativo2.incentivo()};sueldo ${administrativo2.sueldo()}
      <br>${obrero3.bono()}.sueldo ${obrero3.sueldo()}
      `
      
      
      
      /* export default class Cl_principal {
      } */
/* {
      constructor() {
        let administrativo1 = new Cl_administrativo(111, 15, 1),
          obrero1 = new Cl_obrero(222, 20, 2),
          obrero2 = new Cl_obrero(333, 17, 0),
          administrativo2 = new Cl_administrativo(444, 19, 3),
          obrero3 = new Cl_obrero(555, 22, 5);
      }
     let salida = document. getElementById("salida");
      salida.innerHTML =
    }  */