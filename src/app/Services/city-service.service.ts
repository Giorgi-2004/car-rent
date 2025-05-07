import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientService } from './HttpClientService';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClientService : HttpClientService) {}

  getAllCitys(){
    return this.httpClientService.getAll('https://rentcar.stepprojects.ge/api/Car/cities')
  }
}
