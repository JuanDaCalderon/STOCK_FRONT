import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccessService } from 'src/app/services/API/access.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  @ViewChild('form', { static: false }) signupForm: NgForm | undefined;
  height: string = '900px';
  isLoading: boolean = false;

  constructor(private loginService: AccessService, private toastr: ToastrService) {
    this.height = window.innerHeight.toString() + "px";
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    let user = { email: this.signupForm?.value.email, password: this.signupForm?.value.password };
    this.loginService.login(user)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.toastr.success('Has iniciado sesión correctamente');
          this.isLoading = false;
        },
        error: (error) => {
          console.error(error);
          this.toastr.error(error);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

}
