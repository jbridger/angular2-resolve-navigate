import { Injectable }             from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { ServiceResult } from './service-result';
import 'rxjs/operator/map';
import 'rxjs/operator/catch';

@Injectable()
export class MyResolver implements Resolve<ServiceResult> {

  public errorMessage: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
              private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceResult> {

    let id = route.params['id'];

    return this.dataService.getData(id)
        .map((serviceResult: ServiceResult) => {
          return serviceResult;
        })
        .catch((serviceResult: ServiceResult) => {
          this.errorMessage = serviceResult.error;
          this.router.navigateByUrl('/home/error', {skipLocationChange: true});
          return Observable.empty();
        });
  }
}
