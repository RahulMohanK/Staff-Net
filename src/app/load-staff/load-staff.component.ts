import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Staff } from '../../model/staff';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-load-staff',
  templateUrl: './load-staff.component.html',
  styleUrls: ['./load-staff.component.css']
})
export class LoadStaffComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadStaffs('admin');
    this.staffHeading = 'Administrative Staff'
    this.staffType = 'admin';
  }

  staffs: Staff[];
  staff: Staff;
  staffType: string;
  headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Designation"];
  staffHeading: string;

  loadStaffs(staffType: string): void {
    this.apiService.getStaffs(staffType).subscribe(staffs => this.staffs = staffs);
  }

  getStaffType(): void {
    console.log(this.staffType);

    if (this.staffType == 'admin') {
      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Designation"];
      this.staffHeading = 'Administrative Staff'

    }
    if (this.staffType == 'teaching') {
      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Subject"];
      this.staffHeading = 'Teaching Staff'

    }
    if (this.staffType == 'support') {
      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Department"];
      this.staffHeading = 'Supporting Staff'

    }

    this.loadStaffs(this.staffType);


  }

}
