import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccessService } from 'src/app/services/API/access.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
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
    let email = this.signupForm?.value.email;
    this.loginService.passwordRecovery(email)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.toastr.success('Envio de recuperación de contraseña exitoso');
          this.isLoading = false;
        },
        error: (error) => {
          this.toastr.error(error);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

}
