import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Staff } from '../../model/staff';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-staff',
  templateUrl: './load-staff.component.html',
  styleUrls: ['./load-staff.component.css']
})
export class LoadStaffComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.staffHeading = 'Administrative Staff';
    this.staffType = 'admin';
    this.type = 'admin';
    this.loadStaffs(this.type);
  }

  staffs: Staff[];
  staff: Staff;
  staffType: string;
  headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Designation"];
  staffHeading: string;
  type: string;

  loadStaffs(staffType: string): void {
    this.apiService.getStaffs(staffType).subscribe(staffs => this.staffs = staffs);
  }

  getStaffType(type: string): void {

    this.type = type;

    if (type == 'admin') {
      this.staffs = [];
      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Designation"];
      this.staffHeading = 'Administrative Staff';
    }
    if (type == 'teaching') {
      this.staffs = [];

      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Subject"];
      this.staffHeading = 'Teaching Staff';

      console.log(this.staffs);


    }
    if (type == 'support') {
      this.staffs = [];
      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Department"];
      this.staffHeading = 'Supporting Staff';

    }
    this.loadStaffs(type);
  }
  getLog(EmpId: string): void {


    this.router.navigate(['/register/' + EmpId]);
    console.log("clicked" + EmpId);
  }

}
