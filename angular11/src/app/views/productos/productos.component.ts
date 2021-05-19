import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private api:ProductosService, private router:Router, private alerts:AlertsService) { }

  prod = {
    nombre:null,
    precio:null
  }

  ngOnInit(): void {}

  nuevo(){
    this.api.nuevo(this.prod).subscribe(data => {
      if (data){}
      console.log(this.prod)
      this.router.navigate(['productos/listar'])
      this.alerts.showSuccess('Producto registrado','Realizado')
    })    
  }

}
