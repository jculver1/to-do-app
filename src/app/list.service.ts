import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  handleError:string = "Not able to add item"
  server:string = "http://localhost:3001/"

getList(){
  return this.http.get(this.server)
}

postItem(item){
  this.http.post(this.server,{
    "description" : item
  }).subscribe(
    (val) => {
    console.log('Post call successful', val)
    },
    response => {
      console.log("error", response)
    },
    () => {
      console.log('complete')
    }
  )}

  deleteItem(id){
    this.http.delete(`${this.server}${id}`)
    .subscribe(
        (val) => {
            console.log("DELETE call successful value returned in body", 
                        val);
        },
        response => {
            console.log("DELETE call in error", response);
        },
        () => {
            console.log("The DELETE observable is now completed.");
        });
}
  }

