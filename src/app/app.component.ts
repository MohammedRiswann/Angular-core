import {
  AfterViewInit,
  Component,
  HostListener,
  ViewChild,
} from '@angular/core';
import { CartDetails } from './cart-details';
import { SoftwareComponent } from './software/software.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  //view child

  @ViewChild(SoftwareComponent) SoftwareComponentref!: SoftwareComponent;
  ngAfterViewInit(): void {
    console.log(this.SoftwareComponentref);
  }

  value: string = '';
  text: string = 'arshad';

  cartItems: CartDetails[] = [
    {
      name: 'Maatta',
      price: 100,
      quantity: 2,
    },
    {
      name: 'Riswan m ',
      price: 300,
      quantity: 3,
    },
  ];
  // data: string = 'Mohammed Riswan M';

  changeValue(lean: HTMLInputElement) {
    this.value = lean.value;
    lean.value = '';
  }

  triggerChildMethod() {
    this.SoftwareComponentref.changedValue();
  }
}
