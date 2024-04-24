import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {

}
