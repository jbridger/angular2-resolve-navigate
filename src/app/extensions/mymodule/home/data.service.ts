import { Injectable }             from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceResult } from './service-result';

@Injectable()
export class DataService {

  private errorResponse: boolean = false;

  public getData(id: string): Observable<ServiceResult> {
    if (this.errorResponse) {
      return Observable.throw(new ServiceResult(undefined, `errored: ${id}`));
    }
    return Observable.of(new ServiceResult(`we are good: ${id}`, undefined));
  }

  public setErrorResponse(errorResponse: boolean) {
    this.errorResponse = errorResponse;
  }
}
