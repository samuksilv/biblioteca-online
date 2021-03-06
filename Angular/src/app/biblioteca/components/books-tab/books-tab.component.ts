import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BooksService } from "../../services/books.service";

@Component({
    selector: 'books-tab',
    templateUrl: './books-tab.component.html',
    styleUrls: ['./books-tab.component.scss']
})

export class BooksTabComponent { 
    newData: any;
    mytab: number;

    isActivate: boolean = false;

    constructor(private _bookService: BooksService) {
        this._bookService.subject.subscribe(value => {
            this.isActivate = true;
            this.mytab = 1;
        })
    }

    confirmEdit(event){
        this.isActivate = false; 
        this.mytab = 0;
    }
}