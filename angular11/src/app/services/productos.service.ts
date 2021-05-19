import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:string = "http://localhost:3000/productos/";

  constructor(private http:HttpClient) { }

  listar(){
    let dir = this.url + "listar"
    return this.http.get(dir);
  }

  mostrar(id){
    let dir = this.url + "mostrar/" + id
    return this.http.get(dir);
  }

  nuevo(prod){
    let dir = this.url
    return this.http.post(dir,prod);
  }

  eliminar(id){
    let dir = this.url + id
    return this.http.delete(dir)
  }

  actualizar(prod){
    let dir = this.url
    return this.http.put(dir,prod);
  }

}
