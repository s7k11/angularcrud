import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MiddleAddComponent} from './middle-add/middle-add.component'
import {MiddleGetComponent} from './middle-get/middle-get.component'
import {MiddleComponent} from './middle/middle.component'
import {UpdateComponent} from './update/update.component'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path:'' ,component:MiddleComponent
  },
  {
    path:'middle-add' ,component:MiddleAddComponent
  },
  {
    path:'middle-get' ,component:MiddleGetComponent
  },
  {
    path:'update/:id' ,component:UpdateComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'dashboard/:id', component:DashboardComponent
  },
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
