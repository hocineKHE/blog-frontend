import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PostPayload} from "./post-payload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddPostService {




  constructor(private httpClient : HttpClient) { }

  addPost(postPayload: PostPayload){
    return this.httpClient.post("http://localhost:8080/api/posts/", postPayload,httpOptions);
  }

  getAllPosts(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/all");
  }

  getPost(permaLink: Number):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + permaLink);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};
