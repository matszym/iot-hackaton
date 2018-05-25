import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendService } from './service/backend.service';
import { DataGuard } from './guards/data.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: []
})
export class BackendModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BackendModule,
      providers: [BackendService, DataGuard],
    };
  }
 }
