import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  @ViewChild('form', { static: true }) signupForm: NgForm | undefined;
  height: string = '900px';

  constructor() {
    this.height = window.innerHeight.toString() + "px";
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.signupForm?.value);
  }

}
