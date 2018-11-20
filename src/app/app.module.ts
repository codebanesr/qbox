import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PractiseChartComponent } from './practise-chart/practise-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PractiseChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
