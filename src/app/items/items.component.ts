import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private stuff:ListService) { }

  ngOnInit() {
    this.stuff.getList()
    this.readList()
  }

  listData:{}

  selectedId:number 

  clicked:boolean = false

  readList(){
    this.stuff.getList().subscribe(data => {
      this.listData = data 
      console.log(data)
    })
    return this.listData
  }

  removeItem(id){
    this.stuff.deleteItem(id)
  }

  editItem(id){
    this.selectedId = id 
    this.clicked = !this.clicked 
    console.log(id)
    console.log(this.clicked)
  }

}
