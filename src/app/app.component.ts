import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { CartDetails } from './cart-details';
import { SoftwareComponent } from './software/software.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //input data

  data: string = 'hello riswan';

  //view child

  @ViewChild(SoftwareComponent) SoftwareComponentref!: SoftwareComponent;

  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;

  calculateDate() {
    // console.log(this.dateOfBirth.nativeElement.value);
    let dateofb = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let cyear = new Date().getFullYear();
    let tage = cyear - dateofb;
    this.age.nativeElement.value = tage;
  }
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
  //events

  //passing event data
  onInput(event: Event) {
    const inValue = (event.target as HTMLInputElement).value;
    console.log(inValue);
  }

  // @output method recieving data from child to parent

  onChildClick(): void {
    console.log('button clicked from the child');
  }
  onSecondClick(value: string) {
    console.log(value);
  }

  //observables

  myObservable = new Observable((observer) => {
    observer.next('hello');
    observer.complete();
  });

  subscribe = this.myObservable.subscribe({
    next: (value) => {
      console.log(value);
    },
    complete: () => {
      console.log('completed');
    },
  });
}
