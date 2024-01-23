import { Component } from '@angular/core';
import { httpmethods } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent {
  constructor(private service: httpmethods) {}
  onClick() {
    this.service.method().subscribe((value) => {
      console.log(value);
    });
  }

  onClickPost() {
    const postdata = {
      title: 'New Post',
      body: 'This is the body of the new post.',
    };
    this.service.createPost(postdata).subscribe((value) => {
      console.log('post Response', value);
    });
  }
}
