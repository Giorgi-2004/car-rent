import { Injectable } from '@angular/core';
import { HttpClientService } from './HttpClientService';
import { Register } from '../Models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClientService : HttpClientService) { }

  postUser(user: Register){
    return this.httpClientService.postApi('https://rentcar.stepprojects.ge/api/Users/register', user)
  }
}
