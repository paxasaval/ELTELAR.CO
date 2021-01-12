import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../@components/@components.module';
import { FooterComponent } from './../@components/footer/footer.component';
import { HeaderComponent } from './../@components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/home/home.component';
import { ProductComponent } from './landing/product/product.component';
import { TechnologyComponent } from './landing/technology/technology.component';
import { AboutComponent } from './landing/about/about.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: 
  [
    HomeComponent, 
    LandingComponent, 
    ProductComponent, 
    TechnologyComponent, 
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    TechnologyComponent,
    ProductComponent
  ]
})
export class PagesModule { }
