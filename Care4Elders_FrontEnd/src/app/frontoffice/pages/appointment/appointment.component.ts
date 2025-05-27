import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopbarComponent } from '../../../shared/layout/topbar/topbar.component';
import { NavbarComponent } from '../../../shared/layout/navbar/navbar.component';
import { FooterComponent } from '../../../shared/layout/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-appointment',
  imports: [CommonModule,
    TopbarComponent,
    NavbarComponent,
    FooterComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

}
