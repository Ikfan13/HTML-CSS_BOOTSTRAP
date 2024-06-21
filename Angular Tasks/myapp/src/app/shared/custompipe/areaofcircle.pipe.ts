import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaofcircle'
})
export class AreaofcirclePipe implements PipeTransform {

  transform(value:any){
    return 3.14*(value**2);
  }

}
