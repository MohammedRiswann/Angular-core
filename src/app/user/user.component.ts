// user.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class userDetails implements OnInit {
  userId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Access route parameters
    this.route.params.subscribe((params) => {
      this.userId = params['userId'];
      console.log('User ID:', this.userId);
    });
  }
}
