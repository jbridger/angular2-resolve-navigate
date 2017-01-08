import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: `Home component 

<button (click)="makeErrorResponse()">Error Response</button>
<button (click)="makeHappyResponse()">Happy Response</button>

<button (click)="makeRequest()">Make Request</button>

<div>
  <router-outlet></router-outlet>
</div>
  
  

`
})
export class HomeComponent {

  constructor(public dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  makeErrorResponse() {
    this.dataService.setErrorResponse(true);
  }

  makeHappyResponse() {
    this.dataService.setErrorResponse(false);
  }

  makeRequest() {
    console.log(this.router.url);
    this.router.navigate(['display'], {relativeTo: this.route, skipLocationChange: true})
  }
}
