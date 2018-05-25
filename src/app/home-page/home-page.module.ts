import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './containers/home-page/home-page.component';
import { ChartsModule } from '../charts';
import { DataGuard } from '../backend';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      initialData: DataGuard,
    },
  }
];

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule {}
