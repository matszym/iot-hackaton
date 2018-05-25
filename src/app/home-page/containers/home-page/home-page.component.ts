import { Component, OnInit } from '@angular/core';
import { map, tap, switchMap, catchError } from 'rxjs/operators';

import { BackendService } from '../../../backend';
import { Subject, interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

const transformData = data => {
  return {
    labels: data.map(point => point.timestamp),
    datasets: [
      {
        label: 'Humidity',
        data: data.map(point => point.humidity),
        fill: false,
        borderColor: '#30263E',
      },
      {
        label: 'Temperature',
        data: data.map(point => point.temperature),
        fill: false,
        borderColor: '#3F297B',
      },
      {
        label: 'PM10',
        data: data.map(point => point.pm10),
        fill: false,
        borderColor: '#7A89A6',
      },
      {
        label: 'PM25',
        data: data.map(point => point.pm25),
        fill: false,
        borderColor: '#B77CDA',
      },
      {
        label: 'PM100',
        data: data.map(point => point.pm100),
        fill: false,
        borderColor: '#FF895F',
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

    interval(2000).pipe(
      switchMap(() => this.backend.queryData()
        .pipe(
          map(transformData),
          // catchError
        )
      )
    ).subscribe(data => this.data$.next(data));
  }
}
