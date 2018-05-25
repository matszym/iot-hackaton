import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { BackendService } from '../service/backend.service';
@Injectable()
export class DataGuard implements Resolve<any> {
  constructor(private backend: BackendService) {}
  resolve() {
    return this.backend.queryData();
  }
}
