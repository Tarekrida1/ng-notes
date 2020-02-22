import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  userToken;
    constructor(private injector: Injector, private router: Router) {
// this.userToken = this.userService.getToken();
      // console.log(this.userToken)

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1ODIzNjE2NTIsImV4cCI6MTU4MjM2NTI1Mn0.TL7S5_4qRAlXbwJXR0-_F2Accy4ncBiWEVgGFV2WGLo';

        // add authorization header with jwt token if available
            if(this.userToken) {
                request = request.clone(
                    {headers : request.headers.set('Authorization', `Bearer ${this.userToken}`)},
                );
            }
            return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                  return event;
                }),
                catchError((error: HttpErrorResponse) => {
                  if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                      // handel unauthorized users
                     // clear token
                      // logout
                      // window.localStorage.removeItem('token');
                      // window.localStorage.removeItem('ui');
                      // this.router.navigate(['/login']);


// this.userService.logOut();
                    }
                    if (error.error) {
                      // handel errors
                      // this.userService.logOut();

                    }
                    return throwError(error);
                  }
                }));


    }


}


