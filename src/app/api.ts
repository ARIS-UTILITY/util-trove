import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root',
})
export class Api {
  // private apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example API endpoint
  // private apiUrl = 'http://localhost:8080/getUser';
  private apiUrl = 'https://utilities-api-6b90.onrender.com/getUser';

  constructor(private http: HttpClient) { }

  // Method to fetch data
  getApiData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
