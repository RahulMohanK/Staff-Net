import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Staff } from '../../model/staff';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-load-staff',
  templateUrl: './load-staff.component.html',
  styleUrls: ['./load-staff.component.css']
})
export class LoadStaffComponent implements OnInit {

  getstaff$;

  staffs: Staff[];
  staff: Staff;
  staffType: string;
  headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Designation"];
  staffHeading: string;
  type: string;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.staffHeading = 'Administrative Staff';
    this.staffType = 'admin';
    this.type = 'admin';
    this.getStaffType(this.type);
    console.log('init');
  }

  ngOnDestroy(): void {
    this.getstaff$.unsubscribe();
  }



  loadStaffs(staffType: string): void {
    this.getstaff$ = this.apiService.getStaffs(staffType).subscribe(staffs => this.staffs = staffs);
  }

  getStaffType(type: string): void {
    this.staffs = [];
    this.type = type;
    if (type == 'admin') {

      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Designation"];
      this.staffHeading = 'Administrative Staff';
    }
    if (type == 'teaching') {
      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Subject"];
      this.staffHeading = 'Teaching Staff';
      // console.log(this.staffs);
    }
    if (type == 'support') {

      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Department"];
      this.staffHeading = 'Supporting Staff';
    }
    this.loadStaffs(type);
  }

  getLog(EmpId: string): void {
    this.router.navigate(['/register/' + EmpId]);
    // console.log("clicked" + EmpId);
  }


}
