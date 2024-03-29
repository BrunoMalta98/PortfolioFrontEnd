import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionServService } from '../servicios/educacion-serv.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionServ: EducacionServService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {

    this.cargarEducacion();
    if(this.tokenService.getToken()){

      this.isLogged = true;

    } else {

      this.isLogged = false;

    }

  }

  cargarEducacion(): void {

    this.educacionServ.lista().subscribe(data => {this.educacion = data;})

  }

  borrar(id?: number){

    if(id != undefined){
      this.educacionServ.delete(id).subscribe(data => {this.cargarEducacion()},
      
      err =>{

        alert("No se puede borrar la educacion")
      })
    }

  }

}
