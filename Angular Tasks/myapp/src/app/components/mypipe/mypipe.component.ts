import { Component } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrl: './mypipe.component.css'
})
export class MypipeComponent {
msg:string="Illuminati Illuminatti"

emp:any={
    id:100,
    name:"Ikfan",
    salary:20000
 }
 dateObj=new Date();

}
