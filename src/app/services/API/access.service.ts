import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AccessService {
  constructor(private http: HttpClient) {}

  login(user: { email: string, password: string }) {
    return this.http.post('http://localhost:9000/api/auth', user)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(err => {
          let message: string;
          err.error.errors ? message = err.error.errors[0].message : message = 'Error intentando hacer Log In, intenta más tarde'
          return throwError(() => message);
        })
      )
  }

  passwordRecovery(email: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('needAuth', 'false');
    searchParams = searchParams.append('email', email);
    return this.http.put('http://localhost:9000/api/usuario',{ }, { params: searchParams })
    .pipe(
      map(data=>{
        return data;
      }),
      catchError(err => {
        let message: string;
        err.error.errors ? message = err.error.errors[0].message : message = 'Error intentando recuperar tú contraseña, intenta más tarde'
        return throwError(() => message);
      })
    )
  }

  newPassword(token: string, password: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('needAuth', 'false');
    searchParams = searchParams.append('recovery', 'true');
    searchParams = searchParams.append('token', token);
    return this.http.put('http://localhost:9000/api/usuario/edit',{ password: password }, { params: searchParams })
    .pipe(
      map(data=>{
        return data;
      }),
      catchError(err => {
        let message: string;
        err.error.errors ? message = err.error.errors[0].message : message = 'Error intentando crear la nueva contraseña, intenta más tarde'
        return throwError(() => message);
      })
    )
  }
}
