import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CartDetails } from './cart-details';
import { SoftwareComponent } from './software/software.component';
import {
  Observable,
  Subject,
  filter,
  forkJoin,
  interval,
  map,
  of,
  pipe,
  switchMap,
  take,
} from 'rxjs';

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

  subscribee = this.myObservable.subscribe({
    next: (value) => {
      console.log(value);
    },
    complete: () => {
      console.log('completed');
    },
  });

  // observ = new Observable((observer) => {
  //   observer.next('mithlaj');
  //   setInterval(() => {
  //     observer.next('hello world');
  //     observer.complete();
  //   }, 1000);
  //   observer.next('hai world'); //we can return or subscribe values asynchronously
  // });

  //operatrors : operations are called functions , 1 : pipeable operator which takes a observable and return a new modified observable.
  //map,filter

  ngOnInit() {
    // this.observ.subscribe({
    //   next(x) {
    //     console.log(x);
    //   },
    // });
    // const source = of(1, 2, 3);
    // source
    //   .pipe(
    //     map((x) => x * x),
    //     filter((x) => x % 2 == 0)
    //   )
    //   .subscribe((y) => console.log(y));
    // switchMap
    //   const switchs = of('A', 'B', 'C');
    //   switchs
    //     .pipe(
    //       switchMap((letter) =>
    //         interval(1000).pipe(
    //           take(3),
    //           map((value) => letter + value)
    //         )
    //       )
    //     )
    //     .subscribe((x) => console.log(x));
    //forkjoin
    // const obs1 = of('Shaheer is a fraud');
    // const obs2 = of('Riswan is a good boy!');
    // const obs3 = of('Sudais is kayappan');
    // forkJoin([obs1, obs2, obs3]).subscribe((x) => {
    //   console.log(x);
    // });
  }

  //  subject = new Subject();
  //   subject.subscribe(data => console.log("hello",data))
}
