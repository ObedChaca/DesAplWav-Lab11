import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos=null;

  constructor(private api:ProductosService) { }

  ngOnInit(): void {
    this.api.listar().subscribe(data => {
      this.productos = data;
    })
  }

}
