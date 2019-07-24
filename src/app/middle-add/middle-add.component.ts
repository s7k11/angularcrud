import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-middle-add',
  templateUrl: './middle-add.component.html',
  styleUrls: ['./middle-add.component.css']
})
export class MiddleAddComponent implements OnInit {
  name:String;
  email;
  password:String;
  address;
  city;
  constructor(private us: UsersService) { }

  ngOnInit() {
  }
  addData() {
    
      this.us.addData(this.name,this.address,this.city,this.password,this.email);
      alert('Data added');
    console.log(this.password.length)
    // alert(this.password.lenght);
    // console.log(this.name)
}

}
