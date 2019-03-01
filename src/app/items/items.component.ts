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

  readList(){
    this.stuff.getList().subscribe(data => {
      this.listData = data 
      console.log(data)
    })
  }

  removeItem(id){
    this.stuff.deleteItem(id)
  }

}
