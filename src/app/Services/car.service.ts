import { Injectable } from '@angular/core';
import { HttpClientService } from './HttpClientService';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClientService: HttpClientService) { }

  getAllCars() {
    return this.httpClientService.getAll('https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=1&pageSize=10');
  }

  getFilters(city: string, capacity: number | null, startYear: number | null, endYear: number | null) {
    let queryParams: string[] = [];

    if (capacity !== null) queryParams.push(`capacity=${capacity}`);
    if (startYear !== null) queryParams.push(`startYear=${startYear}`);
    if (endYear !== null) queryParams.push(`endYear=${endYear}`);
    if (city) queryParams.push(`city=${encodeURIComponent(city)}`);

    queryParams.push('pageIndex=1');
    queryParams.push('pageSize=10');

    const fullUrl = `https://rentcar.stepprojects.ge/api/Car/filter?${queryParams.join('&')}`;

    return this.httpClientService.getAll(fullUrl);
  }
}
