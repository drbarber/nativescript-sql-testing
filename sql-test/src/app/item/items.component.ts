import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { getString } from "tns-core-modules/application-settings/application-settings";
let sqlLite = require("nativescript-sqlite");

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    people = [];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
    }

    addTap(): void {
        // this.itemService.insert();

        // Use this if you want to seed the database with a bunch of data
        // this.itemService.seedDB();
    }

    refreshTap(): void {
        // this.itemService.fetch();
        setTimeout(() => {
            this.people = this.itemService.inspections;
        }, 15);
    }

    onTestAppSettings() {
        this.itemService.storeJobsInAppSettings();
    }

    getAppSettings() {

        let temp = JSON.parse(getString("Jobs1"));
        this.people = temp;

    }
}

