import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  // variables 
  FirstName: any
  LastName: any
  Email: any
  PhoneNum: any
  CompanyNum: any
  Designation: any
  Bio: any
  Cancel: any
  // smalls variables
  FirstNameSmall: any
  EmailSmall: any
  PhoneNumSmall: any
  CompanySmall: any
  Desiganationsmall: any


  temp: any;




  Update() {

    if (this.FirstName && this.Email && this.PhoneNum && this.CompanyNum && this.Designation != null) {

      console.log("Firstname:" + this.FirstName)
      console.log("LastName:" + this.LastName)
      console.log("Email:" + this.Email)
      console.log("PhoneNum:" + this.PhoneNum)
      console.log("Designation:" + this.Designation)

      // small clear part
      this.EmailSmall=""
      this.FirstNameSmall=""
      this.PhoneNumSmall=""
      this.CompanySmall=""
      this.Desiganationsmall=""


    }
    else {

      if (this.FirstName == null) {
  
        this.FirstNameSmall = "First name field is Empty"
      }
      else {
        this.FirstNameSmall = ""
      }


      if (this.Email == null) {
        this.EmailSmall = "Email Field is Empty"
      } else {
        this.EmailSmall = ""
      }


      if (this.PhoneNum == null) {

          this.PhoneNumSmall = "Phone number is Empty"

      } else {
        this.PhoneNumSmall = ""
      }


      if (this.CompanyNum == null) {
        this.CompanySmall = "Company Field is Empty"
      } else {
        this.CompanySmall = ""
      }

      if (this.Designation == null) {
        this.Desiganationsmall = " Field is Empty"
      } else {
        this.Desiganationsmall = ""
      }

    }

  }
  clear() {
    this.EmailSmall=""
    this.FirstNameSmall=""
    this.PhoneNumSmall=""
    this.CompanySmall=""
    this.Desiganationsmall=""
    this.FirstName =""
    this.LastName =""
    this.Email =""
    this.PhoneNum="" 
    this.CompanyNum =""
    this.Designation =""
    this.Bio =""
    this.Cancel =""
  }

}
