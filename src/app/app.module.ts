import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FilterPipe } from './filter.pipe';
import { ListFilterPipe } from './list-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    FilterPipe,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
