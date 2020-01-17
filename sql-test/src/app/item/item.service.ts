import { Injectable } from "@angular/core";
const Sqlite = require("nativescript-sqlite");

@Injectable({
    providedIn: "root"
})
export class ItemService {
    database;
    inspections;
    dbVersion: number;


    public constructor() {
        let dbSchema = "(id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, middlename TEXT, address TEXT, city TEXT, state TEXT, zipcode TEXT, age TEXT)";

        this.inspections = [];

        (new Sqlite("my.db")).then(db => {
            db.execSQL(`CREATE TABLE people2 ${dbSchema}`).then(id => {

                this.database = db;
                console.log("Created DB");

                console.dir(this.database);

                db.execSQL("DROP table people1");
                this.dbVersion = this.dbVersion + 1;
                db.execSQL("ALTER TABLE people2 RENAME TO people1")


            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });

    }

    deleteDB() {

    }

    public insert() {
        let insertSchema = "(firstname, lastname, middlename, address, city, state, zipcode, age) VALUES (?,?,?,?,?,?,?,?)";
        let insertValues = ["John", "Doeee", "Adam", "1 Testing Way", "Louisville", "Kentucky", "40222", "22"];

        this.database.execSQL(`INSERT INTO people1 ${insertSchema}`, insertValues).then(id => {
            
            this.fetch();
        }, error => {
            console.log("INSERT ERROR", error);
            console.dir(error);
        });
    }

    seedDB(): void {
        for (let index = 0; index < 500; index++) {
            this.insert();
        }
    }


    public fetch(): any {
        this.database.all("SELECT * FROM people1").then(rows => {
            this.inspections = [];
            for (var row in rows) {
                this.inspections.push({
                    "firstname": rows[row][1],
                    "lastname": rows[row][2],
                    "middlename": rows[row][3]
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }
}
