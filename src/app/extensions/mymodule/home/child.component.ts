import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceResult } from './service-result';

@Component({
  template: `Child component <b>{{data}}</b>`
})
export class ChildComponent implements OnInit {

  public data: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data
        .subscribe((data: {serviceResult: ServiceResult}) => {
          this.data = data.serviceResult.data;
        });
  }
}
