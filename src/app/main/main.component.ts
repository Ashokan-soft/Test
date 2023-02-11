import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  show: any;


  ChangeButtoncolor(value: any) {
<<<<<<< HEAD
    
    this.show = value
    // alert(this.show)
=======
    this.show = value
    //alert(this.show)
>>>>>>> c6c3dca04611f029ca9ef2880f90dc1ed9e0f1a3
  }


}
