import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.staffType = 'admin'
  }
  staffType: string;
  EmpId: string;
  Name: string;
  Email: string;
  Phone: string;
  Dob: Date;
  Designation: string;
  Subject: string;
  Department: string;
  staff: any;


  getValues(): void {
    if (this.staffType == 'admin') {
      this.staff = {
        empId: this.EmpId, name: this.Name, email: this.Email, phone: this.Phone,
        dob: this.Dob, staffType: 0, administrativeStaff: [{ designation: this.Designation }]
      }
      console.log(this.staff);
      this.addStaff();
    }
    if (this.staffType == 'teaching') {
      this.staff = {
        empId: this.EmpId, name: this.Name, email: this.Email, phone: this.Phone,
        dob: this.Dob, staffType: 1, teachingStaff: [{ subject: this.Subject }]
      }
      console.log(this.staff);
      this.addStaff();
    }
    if (this.staffType == 'support') {
      this.staff = {
        empId: this.EmpId, name: this.Name, email: this.Email, phone: this.Phone,
        dob: this.Dob, staffType: 2, supportingStaff: [{ department: this.Department }]
      }
      console.log(this.staff);
      this.addStaff();
    }
  }
  EditStaff(): void {

  }
  addStaff(): void {
    this.apiService.addStaff(this.staff).subscribe();
    this.router.navigate(['/load']);
  }
}
