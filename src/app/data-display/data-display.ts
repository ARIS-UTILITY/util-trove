import { Component } from '@angular/core';
import { Api } from '../api'; // Import the ApiService
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf/ngFor
import { OnInit } from '../../../node_modules/@angular/core/types/core';
import { NgIf } from '../../../node_modules/@angular/common/types/_common_module-chunk';


@Component({
  selector: 'app-data-display',
  imports: [CommonModule],
  standalone: true, // Must be standalone
  templateUrl: './data-display.html',
  styleUrl: './data-display.css',
})
export class DataDisplay implements OnInit {
  data: any;
  error: any;

  constructor(private apiService: Api) { } // Inject the service

  ngOnInit(): void {
    // Call the API when the component initializes
    this.apiService.getApiData().subscribe({
      next: (response: any) => {
        this.data = response;
        console.log('Fetched data:', this.data);
      },
      error: (err: any) => {
        this.error = err;
        console.error('Error fetching data:', err);
      }
    });
  }
}
