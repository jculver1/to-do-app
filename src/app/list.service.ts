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
  edit:boolean = false

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

putRequest(id, updateItem) {

  const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
  
  this.http.put("/courses/-KgVwECOnlc-LHb_B0cQ.json",
      {
        "description" : updateItem
      },
      {headers})
      .subscribe(
          val => {
              console.log("PUT call successful value returned in body", 
                          val);
          },
          response => {
              console.log("PUT call in error", response);
          },
          () => {
              console.log("The PUT observable is now completed.");
          }
      );
  }

  }

