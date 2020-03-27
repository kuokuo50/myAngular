import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// Constant
import { appPath } from './app-path.const';

const routes: Routes = [
  {
    path: appPath.home,
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: appPath.survey,
    loadChildren: './survey/survey.module#SurveyModule'
  },
  {
    path: appPath.blog,
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: appPath.inbox,
    loadChildren: './inbox/inbox.module#InboxModule'
  },
  {
    path: '**',
    redirectTo: appPath.home,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
