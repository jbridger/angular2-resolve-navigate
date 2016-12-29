import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child.component';
import { MyResolver } from './my-resolver.service';
import { ErrorComponent } from './error.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ChildComponent,
        resolve: {
          serviceResult: MyResolver
        }
      },
      {
        path: 'error',
        component: ErrorComponent,
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
