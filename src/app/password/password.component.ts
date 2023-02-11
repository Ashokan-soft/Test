import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  OldPassword: any;
  NewPassword: any;
  ConfrimPassword: any;

  // smalls vsariables
  OldPasswordSmall: any;
  NewPasswordSmall: any;
  ConfrimPasswordSmall: any;
  // success message
  success: any

  update() {

    if (this.OldPassword && this.NewPassword && this.ConfrimPassword != null) {
      this.OldPasswordSmall = ""
      this.NewPasswordSmall = ""
      this.ConfrimPasswordSmall = ""

      if (this.NewPassword != this.ConfrimPassword) {

        this.ConfrimPasswordSmall = "Password not Match"

      }
      else {

        console.log("Your old password : " + this.OldPassword)
        console.log("Your New password : " + this.NewPassword)
        console.log("Your Confrim password : " + this.ConfrimPassword)

        this.success = "successfully Saved"
      }

    }
    else {

      if (this.OldPassword == null) {
        this.OldPasswordSmall = "Field is Empty"
      }
      else {
        this.OldPasswordSmall = ""
      }
      if (this.NewPassword == null) {
        this.NewPasswordSmall = "Field is Empty"
      }
      else {
        this.NewPasswordSmall = ""
      }
      if (this.ConfrimPassword == null) {
        this.ConfrimPasswordSmall = "Field is Empty"
      }
      else {
        this.ConfrimPasswordSmall = ""
      }

    }
  }


}
