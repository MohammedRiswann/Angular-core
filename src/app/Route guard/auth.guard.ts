import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authguard implements CanActivate {
  constructor(private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let sin = Math.random();
    if (sin > 0.5) {
      console.log(sin + 'sud');

      return true;
    } else {
      alert('you cant');
      console.log(sin);

      return this.router.createUrlTree(['/result']);
    }
    // throw new Error('Method not implemented.');
  }
}
