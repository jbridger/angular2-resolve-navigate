import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceResult } from './service-result';

@Injectable()
export class DataService {

  public data: string = 'init';

  public getData(): Observable<ServiceResult> {
    return Observable.throw(new ServiceResult(undefined, 'errored'));
    // return Observable.of(new ServiceResult('we are good', undefined));
  }

}
