import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {

 
  transform(value, args: string[]): any {
    let newValues = [];
    for (let key in value) {
    	let exists = 0;
    	for (let i in newValues) { 
    		if( value[key].unitPrice == newValues[i].unitPrice) { 
    			exists += 1;
    			newValues[i].total = newValues[i].quantity + value[key].quantity;
    			newValues[i].orders = (parseInt(key) + 1).toString() +', ' + (parseInt(i) + 1).toString();
          
    		} else {
          newValues[i].orders = key;
        }
    	}
      if( exists == 0) { newValues.push(value[key]) }
      
    }
    return newValues;
  }

}
