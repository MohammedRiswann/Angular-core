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

  onClickput() {
    const userId = 1;
    const Id = 1;
    const updatedData = {
      title: 'Updated Post Title',
      body: 'This post has been updated.',
    };
    this.service
      .updateData(userId, Id, updatedData.title, updatedData.body)
      .subscribe(
        (value) => {
          console.log(value);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  onClickDelete() {
    const id = 1;
    this.service.deleteData(id).subscribe((value) => {
      console.log(value);
    });
  }
}
