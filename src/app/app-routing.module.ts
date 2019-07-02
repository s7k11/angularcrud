import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MiddleAddComponent} from './middle-add/middle-add.component'
import {MiddleGetComponent} from './middle-get/middle-get.component'
import {MiddleComponent} from './middle/middle.component'
import {UpdateComponent} from './update/update.component'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
