import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  NomeDigitado:string = ""
  EmailDigitado:string = ""
  SenhaDigitada:string = ""

  constructor(private router: Router) {}

  EnviarDados(){
    if(this.NomeDigitado == "" || this.EmailDigitado == "" || this.SenhaDigitada == ""){
      Swal.fire({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Todos os campos devem ser preenchidos.',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn-custom-class'
        },
        confirmButtonColor: '#50A2E9'
      });
    }else{
      const usuario = {
        nome: this.NomeDigitado,
        email: this.EmailDigitado,
        senha: this.SenhaDigitada
      };
      localStorage.setItem('usuarioCadastro', JSON.stringify(usuario));
      this.router.navigate(['/login']);
    }  
}
}
