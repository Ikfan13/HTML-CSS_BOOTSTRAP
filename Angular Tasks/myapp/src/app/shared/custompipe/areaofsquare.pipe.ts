import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaofsquare'
})
export class AreaofsquarePipe implements PipeTransform {

  transform(value:any){
    return value**2;
  }

}
