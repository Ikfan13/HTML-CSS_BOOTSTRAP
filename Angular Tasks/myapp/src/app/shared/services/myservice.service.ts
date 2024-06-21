import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  breakfast=[{name:"Idly",price:"10",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzo5RdQ3nnWkOV35zovDwqgrdU3s5VRGFyA&s"},
    {name:"Dosa",price:"40",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeutYtHL88lCQI_ogVpDEWoU1TQwYfcSqOyQ&s"},
    {name:"Poori",price:"30",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo1SjO6Pc4r--XqFJ8KzVPYnjInEeQhLhkA&s"},
    {name:"Pongal",price:"30",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytzRNXSpyRdyWbZX9w44x6CYMP86VQocWsw&s"},
    {name:"Vada",price:"10",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlpnQR3q-WShegO2fAiC6CdhO0aPEiFBpsw&s"},
 ];

}
