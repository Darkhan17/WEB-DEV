import {Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() {
  }

  @Output() dialog = 'hello';


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  gotoAuth() {
    this.dialog = 'intAuth';
  }
  // tslint:disable-next-line:typedef
  gotoReg() {
    this.dialog = 'intReg';
  }

}
