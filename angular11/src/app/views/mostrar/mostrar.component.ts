import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  constructor(private api:ProductosService, private router:Router, private activerouter:ActivatedRoute, private alerts:AlertsService) { }

  productos=null;
  editarForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl('')

  });

  ngOnInit(): void {
    let codigo = this.activerouter.snapshot.paramMap.get('id');
    this.api.mostrar(codigo).subscribe(data => {
        this.productos = data;
        this.editarForm.setValue({
          'id': this.productos[0].codigo,
          'nombre': this.productos[0].descripcion,
          'precio': this.productos[0].precio
        });
    })
  }  

  eliminar(){
    let codigo = this.activerouter.snapshot.paramMap.get('id');
    this.api.eliminar(codigo).subscribe(data => {if (data) {} })
    this.router.navigate(['productos/listar'])
    this.alerts.showSuccess('Producto eliminado con exito','Realizado')
  }

  actualizar(prod){
    this.api.actualizar(prod).subscribe(data => { if (data) {} })
    this.alerts.showSuccess('Datos modificados correctamente','Realizado')
  }




}
