import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './cv/cv.component';
import { IlustracionesComponent } from './ilustraciones/ilustraciones.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
const routes: Routes = [
  {path: 'cv', component: CVComponent},
  {path: 'ilustraciones', component: IlustracionesComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
