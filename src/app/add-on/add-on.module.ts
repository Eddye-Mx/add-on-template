import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import { FacebookComponent } from './general/facebook/facebook.component';
import { GadsComponent } from './general/gads/gads.component';
import { AnalyticsComponent } from './general/analytics/analytics.component';



@NgModule({
  declarations: [
    GeneralComponent,
    FacebookComponent,
    GadsComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AddOnModule { }
