import { Component } from '@angular/core';
import { HeaderComponent } from '../../../Components/header/header.component';
import { FooterComponent } from '../../../Components/footer/footer.component';
import { MainComponent } from '../../../Components/main/main.component';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
