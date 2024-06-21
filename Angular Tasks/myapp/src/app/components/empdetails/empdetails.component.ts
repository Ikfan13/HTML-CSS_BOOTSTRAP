import { Component } from '@angular/core';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrl: './empdetails.component.css'
})
export class EmpdetailsComponent {
    emp:any=[
               {id:101,name:"Mohamed Ikfan",salary:"20000",role:"Program Analyst Trainee"},
               {id:102,name:"Nirmal Raj S",salary:"43530000",role:"Intern"},
               {id:103,name:"Karthik K",salary:"50000",role:"Program Analyst "},
               {id:104,name:"Vignesh K",salary:"60000",role:"System Analyst "},
               {id:105,name:"Thanos",salary:"80000",role:"Developer"},
            ]        
            
    
}
