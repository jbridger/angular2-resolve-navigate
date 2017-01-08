import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyResolver } from './my-resolver.service';

@Component({
  template: `Error component <b>{{errorMessage}}</b>`
})
export class ErrorComponent {

  public errorMessage: string;

  constructor(
      private myResolver: MyResolver
  ) {
    this.errorMessage = myResolver.errorMessage;
  }
}
