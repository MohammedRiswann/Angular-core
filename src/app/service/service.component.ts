import { Component, OnInit } from '@angular/core';
import { onClickservice } from '../services/function.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  constructor(private service: onClickservice) {}
  student: peoples[] = [];

  ngOnInit(): void {
    console.log('oninit logged!');

    this.student = [
      {
        name: 'sudais',
        age: 21,
        salary: 22000,
      },
      {
        name: 'sinan',
        age: 23,
        salary: 26000,
      },
      {
        name: 'matta',
        age: 24,
        salary: 65000,
      },
      {
        name: 'shefin',
        age: 28,
        salary: 11111,
      },
    ];
  }

  serviceButton() {
    this.service.emitter(this.student);

    this.service.simpleSubject.subscribe({
      next: (value) => console.log(value),
    });
  }
}

interface peoples {
  name: string;
  age: number;
  salary: number;
}
