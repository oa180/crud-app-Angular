import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { GallaryComponent } from './components/home/gallary/gallary.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    GallaryComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    NotFoundComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
