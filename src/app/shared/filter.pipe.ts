import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../model/post';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], filterString: string, propName: string): any[] {
    const result:any =[];
    
    if (!value || filterString === '' || propName === '') {
      //return value;
      console.log(value);
    }
    value.forEach((a:any) => {
      if(a[propName].trim().toLowerCase().includes(filterString.trim().toLocaleLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
