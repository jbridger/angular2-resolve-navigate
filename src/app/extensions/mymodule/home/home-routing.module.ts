import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child.component';
import { MyResolver } from './my-resolver.service';
import { ErrorComponent } from './error.component';
import { BlankComponent } from './blank.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: BlankComponent,
      },
      {
        path: 'error',
        component: ErrorComponent,
      },
      {
        path: ':id',
        component: ChildComponent,
        resolve: {
          serviceResult: MyResolver
        }
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
      MyResolver
  ]
})
export class HomeModuleRouting {
}
