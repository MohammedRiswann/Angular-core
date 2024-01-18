import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { SoftwareComponent } from '../software/software.component';
import { ServiceComponent } from '../service/service.component';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { pageNotFound } from '../pagenotfound/pagenot.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareComponent,
  },
  {
    path: 'result',
    component: ServiceComponent,
    children: [
      {
        path: 'child',
        component: ChildComponentComponent,
      },
    ],
  },
  {
    path: '**',
    component: pageNotFound,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class routers {}
