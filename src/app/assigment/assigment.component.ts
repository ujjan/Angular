import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssigmentComponent implements OnInit {
userName = '';
  constructor() { }

  ngOnInit() {
  }
  // function to check if the userName is empty or not
  isUserNameEmpty () {
    if (this.userName.length < 0) {
      return true;
    } else {
      return false;
    }
  }
  onClick () {
    this.userName = '';
  }

}
