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
  updateData(userId: any, Id: any, title: any, body: any) {
    console.log(Id);

    const url = `${this.api}/${Id}`;
    console.log(url);

    const updatedData = { userId, Id, title, body };
    return this.http.put(url, updatedData);
  }
  deleteData(id: any) {
    const url = `${this.api}/${id}`;
    console.log(url);

    return this.http.delete(url);
  }
  patchData(id: any, updateddata: any) {
    const url = `${this.api}/${id}`;

    return this.http.patch(url, updateddata);
  }
}
