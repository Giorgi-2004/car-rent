import { Component, OnInit } from '@angular/core';
import { CarService } from '../../Services/car.service';
import { CityService } from '../../Services/city-service.service';
import { Car } from '../../Models/car';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrordialogComponent } from "../../errordialog/errordialog.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ErrordialogComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  carArr: Car[] = [];
  cities: string[] = [];
  selectedCity: string = '';
  capacity: number | null = null;
  yearFrom: number | null = null;
  yearTo: number | null = null;
  filteredCars: Car[] = [];

  constructor(private carService: CarService, private cityService: CityService) {}

  ngOnInit(){
    this.carService.getAllCars().subscribe((resp : any) => {
      this.carArr = resp.data;
      this.filteredCars = [...this.carArr]; 
    });
  
    this.cityService.getAllCitys().subscribe((resp :any )=>{
      this.cities = resp.filter((city: string) => city !== null && city !== undefined);
    });
  }
  

  onFilterSubmit(form: NgForm): void {
    if (!form.valid) {
      console.warn('ფორმა არ არის ვალიდური');
      return;
    }

    this.carService.getFilters(
      this.selectedCity,
      this.capacity,
      this.yearFrom,
      this.yearTo
    ).subscribe((resp: any) => {
      this.filteredCars = resp.data;
      console.log('გაფილტრული მონაცემები:', this.filteredCars);
    });
  }
}


