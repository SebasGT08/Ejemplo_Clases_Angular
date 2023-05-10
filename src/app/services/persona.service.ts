import { Injectable } from '@angular/core';
import { persona } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: persona[]=[]

  save(persona: persona){
    this.personas.push(persona)
    console.log(this.personas)
  }

  getlist(){
    return this.personas
  }

  constructor() {

   }

   
}
