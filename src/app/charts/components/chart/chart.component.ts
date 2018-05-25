import { Input, Component, OnChanges, SimpleChanges } from '@angular/core';

import { DataPoint } from '../../../backend';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  @Input()
  data;

  config = {
    animation: {
      duration: 1000,
    },
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && changes.data.previousValue) {
      this.config.animation.duration = 0;
    }
  }
}
