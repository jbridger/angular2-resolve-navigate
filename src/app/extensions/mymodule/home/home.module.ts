import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child.component';
import { DataService } from './data.service';
import { ErrorComponent } from './error.component';
import { HomeModuleRouting } from './home-routing.module';
import { BlankComponent } from './blank.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    HomeModuleRouting
  ],
  declarations: [
    BlankComponent,
    HomeComponent,
    ChildComponent,
    ErrorComponent
  ],
  providers: [
    DataService
  ],
})
export class HomeModule {
}
