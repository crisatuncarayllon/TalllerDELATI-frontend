import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCluster'
})

export class SearchClusterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if( args === '' ) { return value };
    const result = [];

    for( let val of value ){
      if( val.cluster == args ){
        result.push(val);
      }
    }
    return result;
  }

}
