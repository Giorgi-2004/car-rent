import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrordialogComponent } from "../../../errordialog/errordialog.component";
import { Caradd } from '../../../Models/caradd';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CarService } from '../../../Services/car.service';

@Component({
  selector: 'app-caradd',
  imports: [RouterModule, ErrordialogComponent,FormsModule,],
  templateUrl: './caradd.component.html',
  styleUrl: './caradd.component.scss'
})
export class CaraddComponent {
  car :  Caradd = {
    brand: '',
    model: '',
    year: null,
    price: null,
    capacity: null,
    transmission: '',
    createdBy: '',
    city: '',
    createdByEmail: '',
    fuelCapacity: null,
    image1: '',
    image2: '',
    image3: '',
    latitude: '',
    longitude: '',
  }

  constructor(private carService: CarService) {}

  onFileChange(event: any, imageField: 'image1' | 'image2' | 'image3') {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.car[imageField] = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.car)
      this.carService.addCar(this.car).subscribe({
        next: res => {
          alert('წარმატებით დაემატა');
        },
        error: err => {
          alert('დაფიქსირდა შეცდომა');
        }
      });
    }
  }
}
