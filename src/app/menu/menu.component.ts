import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  staffs = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadStaffs();
  }

  loadStaffs(): void {
    this.apiService.getStaffs('admin').subscribe(staff => this.staffs.push(staff));
    console.log(this.staffs);
  }
}
