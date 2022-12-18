import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:any=true;
  constructor() { }

  ngOnInit(): void {
  }

  switch(value:any) {
    if(value) {
      this.data = true 
    } else {
      this.data = false
    }
  }

}
