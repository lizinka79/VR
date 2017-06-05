import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
  pure: false
})
export class FilterSearchPipe implements PipeTransform {

  transform(data: any[], searchTerm: string): any[] {
      searchTerm = searchTerm.toUpperCase();
      return data.filter(item => {
        return !searchTerm || item.name.toUpperCase().startsWith(searchTerm.toUpperCase())
      });
  }

}
