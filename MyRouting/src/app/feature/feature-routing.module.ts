import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Component
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  {
    path: '', // 將 feature 改成空字串
    component: FeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
