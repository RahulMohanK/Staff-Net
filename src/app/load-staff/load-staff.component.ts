import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Staff } from '../../model/staff';

@Component({
  selector: 'app-load-staff',
  templateUrl: './load-staff.component.html',
  styleUrls: ['./load-staff.component.css']
})
export class LoadStaffComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadStaffs(this.staffType);

  }

  staffs: Staff[];
  staff: Staff;
  staffType: string = 'admin';
  headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Designation"];


  loadStaffs(staffType: string): void {
    this.apiService.getStaffs(staffType).subscribe(staffs => this.staffs = staffs);
  }

  getStaffType(event): void {
    this.staffType = event.target.value;
    if (this.staffType == 'admin') {
      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Designation"];
    }
    else if (this.staffType == 'teaching') {
      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Subject"];
    }
    else {
      this.headers = ["Sl.No", "EmpId", "Name", "Phone", "Email", "Dob", "Department"];
    }

    this.loadStaffs(this.staffType);
    // console.log(this.staffType);
  }

}
