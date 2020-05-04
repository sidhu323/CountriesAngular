import { CountriesDetailComponent } from './countries-detail/countries-detail.component';
import { CountriesComponent } from './countries/countries.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
   redirectTo: '/countries',
    pathMatch: 'full' },
  {
    path:'countries',
    component:CountriesComponent
  },
  {
    path:'countries/:alpha3Code',
    component:CountriesDetailComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
