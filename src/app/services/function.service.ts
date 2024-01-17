import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class onClickservice {
  simpleSubject: BehaviorSubject<any> = new BehaviorSubject<string>(
    'hello world'
  );
  emitter(data: any) {
    this.simpleSubject.subscribe((value) => console.log(value));
    this.simpleSubject.next(data);
  }
}
