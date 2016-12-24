import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  template: `Home component 

{{dataService.data}}
<div>
  <router-outlet></router-outlet>
  </div>
`
})
export class HomeComponent {

  constructor(public dataService: DataService) {

  }
}
