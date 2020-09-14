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

  private apiurl = "https://localhost:8001/Staff/";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getStaffs(staffType: string): Observable<Staff[]> {
    const url = `${this.apiurl}?type=${staffType}`;
    return this.http.get<Staff[]>(url)
      .pipe(
        tap(_ => console.log('fetched')),
        catchError(this.handleError<Staff[]>('get Staff'))

      );
  }
  addStaff(staff: any): Observable<any> {
    return this.http.post<any>(this.apiurl, staff, this.httpOptions)
      .pipe(
        tap(val => console.log('added')),
        catchError(this.handleError<any>('add staff'))
      );
  }

  getStaff(empId: string): Observable<Staff> {
    console.log('service ' + empId);
    const url = `${this.apiurl}${empId}`;
    return this.http.get<Staff>(url)
      .pipe(
        tap(_ => console.log('fetched single staff')),
        catchError(this.handleError<Staff>('get single Staff'))
      );
  }

  editStaff(empId: string, staff: any): Observable<any> {
    const url = `${this.apiurl}${empId}`;
    return this.http.put<any>(url, staff, this.httpOptions)
      .pipe(
        tap(_ => console.log('staff edited')),
        catchError(this.handleError<any>('edit staff'))
      );
  }

  deleteStaff(empId: string): Observable<Staff> {
    const url = `${this.apiurl}${empId}`;
    return this.http.delete<Staff>(url)
      .pipe(
        tap(_ => console.log('deleted staff')),
        catchError(this.handleError<Staff>('deletion'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
