import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  Inputemail = "";
  Inputsenha = "";

  constructor(private router: Router) {}

  ngOnInit() {
    const usuarioSalvo = localStorage.getItem('usuarioCadastro');

    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      this.Inputemail = usuario.email;  
      this.Inputsenha = usuario.senha;
    }
  }

  EntrarLogin() {

    const usuarioSalvo = localStorage.getItem('usuarioCadastro');
    
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      if (this.Inputemail === usuario.email && this.Inputsenha === usuario.senha) {
        this.router.navigate(['/home']);
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Atenção!',
          text: 'Email ou senha incorretos.',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'btn-custom-class'
          },
          confirmButtonColor: '#50A2E9'
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Nenhum usuário cadastrado.',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn-custom-class'
        },
        confirmButtonColor: '#50A2E9'
      });
    }
  }
}
