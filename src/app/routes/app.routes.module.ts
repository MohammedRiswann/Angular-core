import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SoftwareComponent } from '../software/software.component';
import { ServiceComponent } from '../service/service.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareComponent,
  },
  {
    path: 'result',
    component: ServiceComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class routers {}
