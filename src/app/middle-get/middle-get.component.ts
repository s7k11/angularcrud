import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-middle-get',
  templateUrl: './middle-get.component.html',
  styleUrls: ['./middle-get.component.css']
})
export class MiddleGetComponent implements OnInit {
  arr;
  // name;
  constructor(private us: UsersService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; });
}
delData(id) {
  this.us.delData(id);
}

}
