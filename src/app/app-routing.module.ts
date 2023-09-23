import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    // component: ProductsListComponent,
    children: [
      { path: '', component: ProductsListComponent },

      {
        path: ':id',
        component: ProductsDetailsComponent,
      },
      {
        path: ':id/edit',
        component: FormComponent,
      },
    ],
  },

  // { path: 'product/:id', component: ProductsDetailsComponent },
  { path: 'register', component: FormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
