import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  show: any;


  ChangeButtoncolor(value: any) {
    
    this.show = value
    // alert(this.show)
  }


}
