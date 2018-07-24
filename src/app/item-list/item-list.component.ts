import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {ITEMS} from '../items';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  title ="Team List";
  items = ITEMS;
  searchText:string="";

  constructor() { }

  ngOnInit() {
  }

}
