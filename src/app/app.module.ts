import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovimientosModule } from './movimientos/movimientos.module';
import { PepeComponent } from './pepe/pepe.component';

@NgModule({
  declarations: [
    AppComponent,
    PepeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
