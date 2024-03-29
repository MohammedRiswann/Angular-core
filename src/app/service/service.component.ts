import { Component, OnInit } from '@angular/core';
import { onClickservice } from '../services/function.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routers } from '../routes/app.routes.module';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  constructor(
    private service: onClickservice,
    private route: ActivatedRoute,
    private router: Router
  ) {}
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

    this.route.queryParams.subscribe((paramval) => {
      console.log(paramval);

      const yparamval = paramval['yourParamName'];
      console.log('parameter value : ', yparamval);
    });
    // Example of navigating with query parameters
  }

  serviceButton() {
    this.service.emitter(this.student);

    this.service.simpleSubject.subscribe({
      next: (value) => console.log(value),
    });
  }

  userDetails() {
    this.router.navigate(['/user', '123']);
  }
  navigateToYourRoute() {
    // Example of navigating with query parameters
    this.router.navigate(['/result/child'], {
      queryParams: { aartkkan: 'kunnesh' },
    });
  }
}

interface peoples {
  name: string;
  age: number;
  salary: number;
}
