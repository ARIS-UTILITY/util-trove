import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDisplay } from './data-display/data-display'; // Import


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataDisplay],
  standalone: true, // Must be standalone
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('util-trove');
}
