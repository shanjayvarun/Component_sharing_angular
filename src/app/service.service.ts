import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private $http: HttpClient) {}

  handleError(res: any) {
    return throwError(res.error);
  }

  // getUser() {
  //   return this.$http
  //     .get(`https://jsonplaceholder.typicode.com/users`, {})
  //     .pipe(
  //       map((response: any) => response),
  //       catchError(this.handleError)
  //     );
  // }
}
