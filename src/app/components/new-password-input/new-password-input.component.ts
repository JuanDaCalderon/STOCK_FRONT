import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccessService } from 'src/app/services/API/access.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-password-input',
  templateUrl: './new-password-input.component.html',
  styleUrls: ['./new-password-input.component.scss']
})
export class NewPasswordInputComponent implements OnInit {
  @ViewChild('form', { static: false }) signupForm: NgForm | undefined;
  height: string = '900px';
  isLoading: boolean = false;
  isEqual: boolean = true;
  isDone: boolean = false;

  constructor(
    private resetService: AccessService,
    private toastr: ToastrService,
    private route: ActivatedRoute
    )
  {
    this.height = window.innerHeight.toString() + "px";
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isEqual = true
    this.isLoading = true;
    let password = this.signupForm?.value.password;
    let password2 = this.signupForm?.value.password2;
    let token = this.route.snapshot.params['token'];
    if (password !== password2) {
      this.isEqual = false;
      this.toastr.error("Las contraseñas deben coincidir");
      this.isLoading = false;
    }
    else {
      this.resetService.newPassword(token, password)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.toastr.success('Nueva contraseña generada correctamente');
            this.isLoading = false;
            this.isDone = true;
          },
          error: (error) => {
            this.toastr.error(error);
            this.isLoading = false;
          },
          complete: () => {
            this.isLoading = false;
            this.isDone = true;
          }
        });
    }
  }
}
