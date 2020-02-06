import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  /**
   * 
   * @param value Data coming is stored in value
   * @param keys Column name are as keys
   * @param term Values of column
   */
  transform(value, keys: string, term: string) {
    if(!term) {
      return value;
    }
    return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }

}

