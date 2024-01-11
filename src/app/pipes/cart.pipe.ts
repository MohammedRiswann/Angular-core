import { Pipe, PipeTransform } from '@angular/core';
import { CartDetails } from '../cart-details';

@Pipe({
  name: 'carttotal',
})
export class cartTotal implements PipeTransform {
  transform(items: CartDetails[]): number {
    if (!items || items.length === 0) {
      return 0;
    }
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
