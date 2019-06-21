import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let newValues = []
    for (let key in value) {
    	
    			
    			newValues[key].userId = (parseInt(key) + 1).toString();
    	
     newValues.push(value[key]);
      
    }
    return newValues;
  }

}
