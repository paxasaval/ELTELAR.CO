import { AboutComponent } from './@pages/landing/about/about.component';
import { TechnologyComponent } from './@pages/landing/technology/technology.component';
import { ProductComponent } from './@pages/landing/product/product.component';
import { HomeComponent } from './@pages/landing/home/home.component';
import { LandingComponent } from './@pages/landing/landing.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//import { LandingComponentPrueba } from './@pages/xzc/landing.component';

const routes: Routes = [
  {
    path:'landing',
    component: LandingComponent
  },
  {
    path:'',
    component: LandingComponent,
    children: [
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'technology',
        component: TechnologyComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
