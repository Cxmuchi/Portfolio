import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CVComponent } from './components/cv/cv.component';
import { IlustracionesComponent } from './components/ilustraciones/ilustraciones.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    IlustracionesComponent,
    SobreMiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
