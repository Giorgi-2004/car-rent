import { Injectable } from '@angular/core';
import { HttpClientService } from './HttpClientService';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClientService: HttpClientService) {}

  logInUser(user: any) {
    return this.httpClientService.postApi(
      'https://rentcar.stepprojects.ge/api/Users/login',
      user
    );
  }
}
