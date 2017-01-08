import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  template: `Home component 

<div>
  <input type="text" [(ngModel)]="inputVal">Error Response
</div>

<button (click)="makeErrorResponse()">Error Response</button>
<button (click)="makeHappyResponse()">Happy Response</button>

<button (click)="makeRequest()">Make Request</button>

<div>
  <router-outlet></router-outlet>
</div>
`
})
export class HomeComponent implements OnInit {
  @Input() public inputVal: string;

  constructor(public dataService: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  makeErrorResponse() {
    this.dataService.setErrorResponse(true);
  }

  makeHappyResponse() {
    this.dataService.setErrorResponse(false);
  }

  makeRequest() {
    console.log(this.inputVal);
    console.log(this.router.routerState.snapshot.url);
    this.router.navigate([this.inputVal], {relativeTo: this.activatedRoute})
  }
}
