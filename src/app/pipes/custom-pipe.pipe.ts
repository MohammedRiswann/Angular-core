import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
})
export class MyCustomPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'string') {
      return value;
    }

    const letters = value.substring(0, 6);

    return letters + ' Is a Good Boy';
  }
}
