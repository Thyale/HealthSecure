import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nomeUsuario:string = ""

  ngOnInit(){
    const buscarNome = localStorage.getItem('usuarioCadastro')
    if(buscarNome){
      const user =  JSON.parse(buscarNome)
      this.nomeUsuario =  user.nome
    }
  }

  Aparecer: boolean = false

  AparecerMobile(){
    if(this.Aparecer === false){
      this.Aparecer = true
    }else{
      this.Aparecer = false
    }
  }
}
