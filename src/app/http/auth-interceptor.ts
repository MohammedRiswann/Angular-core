import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class Authinterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Log the start of the request
    console.log(`Request started for ${request.url}`);
    console.log(request);
    const modified = request.clone({
      headers: request.headers.append('kunjani', 'shinuoun'),
      params: request.params.append('hellow world', 'hi'),
    });
    // Pass the request to the next handler and log the end
    return next.handle(modified).pipe(
      tap((event) => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
