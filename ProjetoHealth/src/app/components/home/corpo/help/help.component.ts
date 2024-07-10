import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {

  DuvidaDigitada:string = ""

  EnviarDuvida(){
    const duvida = {
      duvida: this.DuvidaDigitada,
    };
    localStorage.setItem('DuvidaDigitada', JSON.stringify(duvida));
    this.DuvidaDigitada = ""
  }
}
