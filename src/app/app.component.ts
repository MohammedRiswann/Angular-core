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
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest,
  filter,
  forkJoin,
  from,
  interval,
  map,
  of,
  pipe,
  switchMap,
  take,
  zip,
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

  // cartItems: CartDetails[] = [
  //   {
  //     name: 'Maatta',
  //     price: 100,
  //     quantity: 2,
  //   },
  //   {
  //     name: 'Riswan m ',
  //     price: 300,
  //     quantity: 3,
  //   },
  // ];
  // // data: string = 'Mohammed Riswan M';

  // changeValue(lean: HTMLInputElement) {
  //   this.value = lean.value;
  //   lean.value = '';
  // }

  // triggerChildMethod() {
  //   this.SoftwareComponentref.changedValue();
  // }
  // //events

  // //passing event data
  // onInput(event: Event) {
  //   const inValue = (event.target as HTMLInputElement).value;
  //   console.log(inValue);
  // }

  // // @output method recieving data from child to parent

  // onChildClick(): void {
  //   console.log('button clicked from the child');
  // }
  // onSecondClick(value: string) {
  //   console.log(value);
  // }

  //observables

  // myObservable = new Observable((observer) => {
  //   observer.next('hello');
  //   observer.complete();
  // });

  // subscribee = this.myObservable.subscribe({
  //   next: (value) => {
  //     console.log(value);
  //   },
  //   complete: () => {
  //     console.log('completed');
  //   },
  // });

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
    // const i = interval(2500).subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    // });
    // const switchs = of('A', 'B', 'C', 'D', 'E');
    // const sentence = from(['Hello', 'Hii', 'Bie', 'Hiii']);
    // const zipObs = zip(switchs, interval(1000).pipe(take(4)), sentence)
    //   .pipe(
    //     map(([letter, value, word]) => {
    //       return `${letter} ${value} ${word}`;
    //     })
    //   )
    //   // .subscribe((x) => console.log(x));
    // zipObs.subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    // });
    // switchs
    //   .pipe(
    //     switchMap((letter) =>
    //       interval(1000).pipe(
    //         take(5),
    //         map((value) => {
    //           // console.log(letter, value);
    //           return letter + value;
    //         })
    //       )
    //     )
    //   )
    //   .subscribe((x) => console.log(x));
    //forkjoin
    // const obs1 = of('Shaheer is a fraud');
    // const obs2 = of('Riswan is a good boy!');
    // const obs3 = of('Sudais is kayappan');
    // forkJoin([obs1, obs2, obs3]).subscribe((x) => {
    //   console.log(x);
    // });

    //subject

    const subject = new Subject<number>();

    // subject.subscribe((value) => console.log(`Observer 1: ${value}`));

    // subject.next(1); // Observer 1: 1
    // subject.next(3);

    // subject.subscribe((value) => console.log(`Observer 2: ${value}`));

    // subject.next(2); // Observer 1: 2, Observer 2: 2

    //Behaviour Subject

    //   const bSubject = new BehaviorSubject<any>('Hello World');

    //   bSubject.subscribe((value) => console.log(value));
    //   bSubject.next('Maatta');
    //   bSubject.next('Riswan');
  }
}
