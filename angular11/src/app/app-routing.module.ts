import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './views/productos/productos.component';
import { ListarComponent } from './views/listar/listar.component';
import { MostrarComponent } from './views/mostrar/mostrar.component';

const routes: Routes = [
  { path:'', redirectTo:'productos/listar', pathMatch:'full' },
  { path:'productos', component:ProductosComponent },
  { path:'productos/listar', component:ListarComponent },
  { path:'productos/mostrar/:id', component:MostrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductosComponent,ListarComponent,MostrarComponent]