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
    if(this.password.length<10){
      alert('Password Must be atleast 10 Characters long');
    }
    else
    {
      this.us.addData(this.name,this.address,this.city,this.password,this.email);
      alert('Registeration Complete');
    }
    console.log(this.password.length)
    // alert(this.password.lenght);
    // console.log(this.name)
}

}
