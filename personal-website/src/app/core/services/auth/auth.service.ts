import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(resource: any){
      return this.http.post(environment.apiAuth + '/login', resource).pipe(
          map((data: any) => {
              return data;
          })
      );
  }
}
