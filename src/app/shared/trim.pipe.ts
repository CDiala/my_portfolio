import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 14) 
      return value.substring(0, 14) + "...";
    return value;
  }

}
