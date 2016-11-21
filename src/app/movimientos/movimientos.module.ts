import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientosComponent } from './movimientos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovimientosComponent],
  exports:[
  	MovimientosComponent



  ]
})
export class MovimientosModule { }
