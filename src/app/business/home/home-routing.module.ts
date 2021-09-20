import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './commons/components/add/add.component';
import { ListComponent } from './commons/components/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'home', component: ListComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
