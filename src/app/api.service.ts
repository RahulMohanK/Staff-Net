import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Staff } from '../model/staff';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiurl = "https://localhost:8001/Staff";

  getStaffs(staffType: string): Observable<Staff[]> {
    const url = `${this.apiurl}/?type=${staffType}`;
    return this.http.get<Staff[]>(url)
      .pipe(
        tap(_ => console.log('fetched')),
        catchError(this.handleError<Staff[]>('get Staff'))

      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
