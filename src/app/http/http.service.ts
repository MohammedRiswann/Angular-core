import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class httpmethods {
  constructor(private http: HttpClient) {}
  api = 'https://jsonplaceholder.typicode.com/posts';

  method() {
    return this.http.get(this.api);
  }

  createPost(postdata: any) {
    return this.http.post(this.api, postdata);
  }
}
