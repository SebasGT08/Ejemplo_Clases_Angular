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

}
