import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
let sqlLite = require("nativescript-sqlite");

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    people = [];

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        // for (let index = 0; index < 1000; index++) {
        //     this.itemService.insert();
        // }
        
    //   this.itemService.fetch();
    //   setTimeout(() => {
    //     this.people = this.itemService.inspections;
    //   }, 15);
      
    }
}

