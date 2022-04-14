import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  height: string = '900px';

  constructor() {
    this.height = window.innerHeight.toString() + "px";
  }

  ngOnInit(): void {
  }

}
