import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RepositorieComponent } from './repositorie/repositorie.component';

const routes: Routes = [
  { path: '', component:  DashboardComponent },
  { path: 'products', component:  ProductsComponent},
  { path: 'repositorie/:id', component:  RepositorieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
