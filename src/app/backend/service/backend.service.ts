import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { delay, tap } from 'rxjs/operators';

export interface DataPoint {
  timestamp: string;
  temperature: number;
  humidity: number;
  pm10: number;
  pm25: number;
  pm100: number;
}
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}
  queryData(): Observable<DataPoint[]> {
    return this.http.get<DataPoint[]>('/measurements-receiver/');
    // return of([
    //   {
    //     dateTime: '2018-05-17T19:20:45+01:00',
    //     temp: 17,
    //     humidity: 89,
    //     pm10: 1,
    //     pm25: 6,
    //     pm100: 11,
    //   },
    //   {
    //     dateTime: '2018-05-18T19:20:45+01:00',
    //     temp: 18,
    //     humidity: 90,
    //     pm10: 1,
    //     pm25: 6,
    //     pm100: 11,
    //   },
    //   {
    //     dateTime: '2018-05-19T19:20:45+01:00',
    //     temp: 19,
    //     humidity: 92,
    //     pm10: 1,
    //     pm25: 6,
    //     pm100: 11,
    //   },
    //   {
    //     dateTime: '2018-05-20T19:20:45+01:00',
    //     temp: 17,
    //     humidity: 91,
    //     pm10: 1,
    //     pm25: 6,
    //     pm100: 11,
    //   },
    //   {
    //     dateTime: '2018-05-21T19:20:45+01:00',
    //     temp: 16,
    //     humidity: 86,
    //     pm10: 1,
    //     pm25: 6,
    //     pm100: 11,
    //   },
    //   {
    //     dateTime: '2018-05-22T19:20:45+01:00',
    //     temp: 15,
    //     humidity: 82,
    //     pm10: 1,
    //     pm25: 6,
    //     pm100: 11,
    //   },
    //   {
    //     dateTime: '2018-05-23T19:20:45+01:00',
    //     temp: 17,
    //     humidity: 89,
    //     pm10: 1,
    //     pm25: 6,
    //     pm100: 11,
    //   },
    //   {
    //     dateTime: '2018-05-24T19:20:45+01:00',
    //     temp: 18,
    //     humidity: 91,
    //     pm10: 1,
    //     pm25: 6,
    //     pm100: 11,
    //   },
    //   {
    //     dateTime: '2018-05-25T19:20:45+01:00',
    //     temp: 17,
    //     humidity: 90,
    //     pm10: 12,
    //     pm25: 1,
    //     pm100: 2,
    //   }
    // ]).pipe(delay(2000));
  }
  loadSinglePoint(): Observable<DataPoint> {
    const dateTime = '2018-05-25T19:20:45+01:00';
    return of({
      dateTime: '2018-05-25T19:20:45+01:00',
      temp: 17,
      humidity: 89,
      pm10: 1,
      pm25: 6,
      pm100: 11,
    });
  }

}
