import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
  pure: false
})
export class FilterArrayPipe implements PipeTransform {

  transform(items: Array<any>, conditions: {[field: string]: string[]}): Array<any> {
        return items.filter(item => {
            for (let field in conditions) {
                if(conditions[field] instanceof Array) {
                    if(conditions[field].indexOf(item[field]) == -1)
                        return false;
                }
                else {
                    if (item[field] !== conditions[field])
                        return false;
                }
            }
            return true;
        });
    }

}
