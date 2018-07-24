import { Pipe, PipeTransform } from '@angular/core';

import  { Item } from './item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: Item[], searchText: string): any {
    let newList: Item[];
    newList = this.searchItemName(list, searchText);
    if (newList.length > 0) {
      return newList;
    } else {
      return list;
    }
  }

  searchItemName (list: Item[], searchString: string): Item[] {
    let filteredItems: Item[];
    filteredItems = [{id: 0, name: "search text", imageUrl: "google.com", description: "searchText" }];
    filteredItems.pop();

    list.forEach((item, i, items) => {if (item.name.includes(searchString)) {filteredItems.push(item); }});
    return filteredItems;
  }
}
