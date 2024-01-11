import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css'],
})
export class SoftwareComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() variable!: string;
  agee!: string;
  softwarePro: string = 'Hello Riswan';
  changedValue() {
    this.softwarePro = 'Get out Riswan';
  }
  constructor() {
    console.log('constructor logged!');
  }

  //life cycle hooks
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Ngonchnages ', changes);
  }

  ngOnInit(): void {
    console.log('oninit logged!');
  }

  ngDoCheck(): void {
    console.log('do check logged!');
  }
  ngAfterContentInit(): void {
    console.log('after');
  }
  ngAfterContentChecked(): void {
    console.log('checked after');
  }
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  ngAfterViewChecked(): void {
    console.log('after view checked');
  }
}
