import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data
  id;
  constructor(private us:UsersService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params.id;
    this.getDataById(this.id);
  }

  getDataById(id)
  {
    this.us.getDataById(id).subscribe(res=>this.data=res);
  }

}
