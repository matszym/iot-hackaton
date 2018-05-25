import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/chart/chart.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent],
})
export class ChartsModule {}
