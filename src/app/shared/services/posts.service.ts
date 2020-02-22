import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import  { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1ODE2MDM5MTIsImV4cCI6MTU4MTYwNzUxMn0.gJM3BWAJ77RZOe5S9CKJI3Ce33Mf0fR0F0jeQJz1Lxg'
  //   })
  // }
  constructor(private http: HttpClient) {

  }
  // get all items
getAll() {
  return this.http.get(`${ environment.apiUrl }/posts`);
}
add(post) {
  return this.http.post(`${ environment.apiUrl }/posts`, post);
}
deletePost(id) {
  return this.http.delete(`${ environment.apiUrl }/posts/${id}`);
}
}
