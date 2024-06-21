import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
 isCond:boolean=true;
 isCond2:boolean=false;

 mybike:string[]=["Bajaj","Honda","Royal Enfield","TVS","Hero"];
 bikee:string="Royal Enfield";
}
