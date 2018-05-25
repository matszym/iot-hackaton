import { Component, OnInit } from '@angular/core';
import { map, tap, switchMap } from 'rxjs/operators';

import { BackendService } from '../../../backend';
import { Subject, interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const transformData = data => {
  return {
    labels: data.map(point => point.dateTime),
    datasets: [
      {
        label: 'Humidity',
        data: data.map(point => point.humidity),
        fill: false,
        borderColor: '#565656',
      },
      {
        label: 'Temperature',
        data: data.map(point => point.temp),
        fill: false,
        borderColor: '#565656',
      },
      {
        label: 'PM10',
        data: data.map(point => point.pm10),
        fill: false,
        borderColor: '#565656',
      },
      {
        label: 'PM25',
        data: data.map(point => point.pm25),
        fill: false,
        borderColor: '#565656',
      },
      {
        label: 'PM100',
        data: data.map(point => point.pm100),
        fill: false,
        borderColor: '#565656',
      },
    ],
  };
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(
    private backend: BackendService,
    private route: ActivatedRoute,
  ) { }

  data$ = new Subject();

  ngOnInit() {
    const initialData = this.route.snapshot.data['initialData'];

    this.data$.next(transformData(initialData));

    interval(5000).pipe(
      switchMap(() => this.backend.queryData()
        .pipe(
          map(transformData)
        )
      )
    ).subscribe(data => this.data$.next(data));
  }
}
