import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';

import { SharedMaterialModule } from '../shared-material.module';

@NgModule({
  declarations: [SurveyComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule
  ]
})
export class SurveyModule { }
