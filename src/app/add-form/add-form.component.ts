import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  newDescription:string 


  constructor(private stuff:ListService) { }

  ngOnInit() {
    this.stuff.getList()
  }

  addItem(e:any) {
    this.newDescription = e.target.value
    console.log(e.target.value)
  }

  makePost(){
    return this.stuff.postItem(this.newDescription)
  }

}
