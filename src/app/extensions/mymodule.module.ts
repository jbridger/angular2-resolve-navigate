import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child.component';
import { MyModuleRouting } from './mymodule-routing.module';
import { DataService } from './data.service';
import { ErrorComponent } from './error.component';


@NgModule({
  imports: [
    MyModuleRouting
  ],
  declarations: [
    HomeComponent,
    ChildComponent,
    ErrorComponent
  ],
  providers: [
    DataService
  ],
})
export class MyModule {
}
