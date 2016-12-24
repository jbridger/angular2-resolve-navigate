import { Injectable }             from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { ServiceResult } from './service-result';
import 'rxjs/operator/map';
import 'rxjs/operator/catch';

@Injectable()
export class MyResolver implements Resolve<ServiceResult> {

  public errorMessage: string;

  constructor(private router: Router, private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServiceResult> {
    return this.dataService.getData()
        .map((serviceResult: ServiceResult) => {
          return serviceResult;
        })
        .catch((serviceResult: ServiceResult) => {
          this.errorMessage = serviceResult.error;
          this.router.navigateByUrl('/home/error');
          return Observable.empty();
        });
  }
}
