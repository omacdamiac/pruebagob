import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosService } from './services/datos.service';
import { InterceptorService } from 'src/app/commons/intercepto/interceptor.service';
import { ListComponent } from './list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {SkeletonModule} from 'primeng/skeleton';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    TableModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  exports: [ListComponent],
  providers: [
    DatosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class ListModule {}
