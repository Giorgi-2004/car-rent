import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // ეს აუცილებლად გჭირდება

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  httpClientService: any;
  
  constructor(private http: HttpClient) { }
  
  getAll(url: string): Observable<any> {
    return this.http.get(url);
  }

  postApi(url: string, obj: any): Observable<any> {
    return this.http.post(url, obj);
  }

  
getFilteredCars(url: string) {
  return this.httpClientService.getAll(url);
}

}



