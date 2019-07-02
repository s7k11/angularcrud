import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-middle-add',
  templateUrl: './middle-add.component.html',
  styleUrls: ['./middle-add.component.css']
})
export class MiddleAddComponent implements OnInit {
  name;
  email;
  password;
  address;
  city;
  constructor(private us: UsersService) { }

  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.address,this.city,this.email,this.password);
    // console.log(this.name)
}

}
