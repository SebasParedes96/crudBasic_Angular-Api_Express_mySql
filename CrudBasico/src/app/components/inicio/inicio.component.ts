import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from "../../services/equipo.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  //variable

  ListarEquipo: Equipo[] = [];

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }


listarEquipo()
{
  this.EquipoService.getEquipos().subscribe(
    {next: res=>{
      console.log(res);
      this.ListarEquipo=<any>res;
    },
    error: err => console.log(err)}
  )

}

eliminar(id:string){
this.EquipoService.deleteEquipo(id).subscribe(
  {next: res=>{
    console.log('equipo eliminado');
    this.listarEquipo();
  },
error: err=> console.log(err)}
)
}

modificar(id:string){
  this.router.navigate(['/edit/'+id])
}
}




