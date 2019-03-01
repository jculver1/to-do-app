import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  handleError:string = "Not able to add item"

getList(){
  return this.http.get('http://localhost:3001/')
}

// postItem(item){
//   return this.http.post('http://localhost:3001/',item,{
//     headers: new HttpHeaders({
//       "Content-Type" : "application/json"
//     }) 
//   })
// }

postItem(item){
  this.http.post("http://localhost:3001/",{
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



}