import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  async login(user: any){
    debugger;
    const result = await this.http.post<any>(`${environment.firebaseConfig}/auth/login`,user).toPromise();
    if(result && result.access_token){
      window.localStorage.setItem('token', result.access_token);
      return true;
    }
    return false;

  }

  createAccount(account: any){
    return new Promise((resolve, reject) =>{
      resolve(true);
    })
  }
}
