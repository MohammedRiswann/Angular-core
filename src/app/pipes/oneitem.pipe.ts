import { Pipe, PipeTransform } from '@angular/core';
import { CartDetails } from '../cart-details';

@Pipe({
  name: 'cartOne',
})
export class oneitem implements PipeTransform {
  transform(items: CartDetails): number {
    if (!items) {
      return 0;
    }
    return items.price * items.quantity;
  }
}
