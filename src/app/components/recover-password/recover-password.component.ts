import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  height: string = '900px';

  constructor() {
    this.height = window.innerHeight.toString() + "px";
  }

  ngOnInit(): void {
  }

}
