import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Staff } from '../../model/staff';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addStaff$;
  editStaff$;
  deleteStaff$;

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

  heading: string;
  editStaff: Staff;
  empIdCheck: string;
  btntext: string;
  deleteBtnVisibility: boolean = false;
  selectEditable: boolean = true;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit(): void {
    if (!this.checkParam()) {
      this.staffType = 'admin';
      this.heading = "REGISTER";
      this.btntext = "Submit";
    }
    else {
      this.populateForm();
      //  console.log("else " + this.empIdCheck);
      this.heading = "EDIT";
      this.btntext = "Edit";
      this.deleteBtnVisibility = true;
      this.selectEditable = false;
    }
  }

  ngOnDestroy(): void {
    if (this.addStaff$ != undefined) {
      this.addStaff$.unsubscribe();
    }
    if (this.editStaff$ != undefined) {
      this.editStaff$.unsubscribe();
    }
    if (this.deleteStaff$ != undefined) {
      this.deleteStaff$.unsubscribe();
    }
  }



  AddStaff(): void {
    this.addStaff$ = this.apiService.addStaff(this.staff).subscribe(_ => {
      this.router.navigate(['/load']);
    });

  }

  EditStaff(): void {
    this.editStaff$ = this.apiService.editStaff(this.empIdCheck, this.staff).subscribe(_ => {
      this.router.navigate(['/load']);
    });

  }

  DeleteStaff(): void {
    this.deleteStaff$ = this.apiService.deleteStaff(this.empIdCheck).subscribe(_ => {
      this.router.navigate(['/load']);
    });

  }
  getValues(): void {
    if (this.staffType == 'admin') {
      this.staff = {
        empId: this.EmpId, name: this.Name, email: this.Email, phone: this.Phone,
        dob: this.Dob, staffType: 0, administrativeStaff: [{ designation: this.Designation }]
      }
      console.log(this.staff);
    }
    if (this.staffType == 'teaching') {
      this.staff = {
        empId: this.EmpId, name: this.Name, email: this.Email, phone: this.Phone,
        dob: this.Dob, staffType: 1, teachingStaff: [{ subject: this.Subject }]
      }
    }
    if (this.staffType == 'support') {
      this.staff = {
        empId: this.EmpId, name: this.Name, email: this.Email, phone: this.Phone,
        dob: this.Dob, staffType: 2, supportingStaff: [{ department: this.Department }]
      }
      console.log(this.staff);
    }
    if (this.heading == "REGISTER") {
      this.AddStaff();
    }
    else {
      this.EditStaff();
    }
  }


  checkParam(): boolean {
    this.empIdCheck = this.route.snapshot.paramMap.get('empId');
    if (this.empIdCheck == null) {
      return false;
    }
    return true;
  }

  populateForm(): void {
    this.apiService.getStaff(this.empIdCheck).subscribe(editStaff => {
      this.editStaff = editStaff;
      if (editStaff.staffType == 0) {
        this.staffType = 'admin';
        this.Designation = editStaff.administrativeStaff[0].designation;
      }
      else if (editStaff.staffType == 1) {
        this.staffType = 'teaching';
        this.Subject = editStaff.teachingStaff[0].subject;
      }
      else {
        this.staffType = 'support';
        this.Department = editStaff.supportingStaff[0].department;
      }
      this.EmpId = editStaff.empId;
      this.Name = editStaff.name;
      this.Email = editStaff.email;
      this.Phone = editStaff.phone;
      this.Dob = editStaff.dob;
    });
  }

}
