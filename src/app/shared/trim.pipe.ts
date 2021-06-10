import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > Number(args[0])) 
      return value.substring(0, Number(args[0])) + "...";
    return value;
  }

}
