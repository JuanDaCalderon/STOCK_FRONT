import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
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
