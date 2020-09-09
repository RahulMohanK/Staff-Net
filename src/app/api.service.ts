import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiurl = "https://localhost:8001/Staff";

  getStaffs(staffType: string): Observable<any> {
    const url = `${this.apiurl}/?type=${staffType}`
    return this.http.get<any>(url)
      .pipe(
        tap(val => console.log('fetched')),
        catchError(this.handleError<any>('get Staff'))

      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
