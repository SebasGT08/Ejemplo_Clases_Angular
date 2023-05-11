import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[]=[]

  save(persona: Persona){
    this.personas.push(persona)
    console.log(this.personas)
  }

  getlist(){
    return this.personas
  }

  delete(cedula: string){
    const index = this.personas.findIndex(persona => persona.cedula === cedula);
    if (index !== -1) {
      this.personas.splice(index, 1);
    }
  }

  update(cedula: string, personaActualizada: Persona){
    const index = this.personas.findIndex(persona => persona.cedula === cedula);
    if (index !== -1) {
      this.personas[index] = personaActualizada;
    }
  }

  getPersonaByCedula(cedula: string): Persona | undefined {
    return this.personas.find(persona => persona.cedula === cedula);
  }


}
