import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListModule } from './commons/components/list/list.module';
import { BrowserModule } from '@angular/platform-browser';
import { AddModule } from './commons/components/add/add.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ListModule,
    AddModule,
  ]
})
export class HomeModule { }
