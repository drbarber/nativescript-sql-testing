import { Component } from "@angular/core";
const Sqlite = require("nativescript-sqlite");

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    inspections;
    database;


 }


