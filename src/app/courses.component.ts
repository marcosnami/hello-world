import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title: " + title }}</h2>
        <h2>{{ "Title: " + getTitle() }}</h2>
        <hr>
        <h2 [textContent]="title"></h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
        <hr>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
        <hr>
        <table border=2>
            <tr>
                <td [attr.colspan]="colSpan">{{ data }}</td>
            </tr>
        </table>
        <hr>
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <br>
        <button class="btn" [style.backgroundColor]="isActive ? 'pink' : 'white'">Save</button>
        <br>
        <div (click)="onDivClicked()">
            <button class="btn btn-secondary" (click)="onSave($event)">Save</button>
        </div>
        <br>
        <input (keyup.enter)="onKeyUp($event)"/>
        <br>
        <input #email (keyup.enter)="onKeyUpEmail(email.value)"/>
        <br>
        <p>two-way binding</p>
        <input [(ngModel)]="email2" (keyup.enter)="onKeyUpTwoWay()"/>
        <hr>
        {{ course.title | uppercase | lowercase | titlecase }} <br>
        {{ course.rating | number:'2.2-2' }} <br>
        {{ course.students | number }} <br>
        {{ course.price | currency:'BRL':'symbol':'2.2-2' }} <br>
        {{ course.percent | percent:'2.1-1' }} <br>
        {{ course.releaseDate | date:'MM/dd/yyyy' }} <br>
        <hr>
        {{ text | summary:20 }}
        <hr>
    ` 
})
export class CoursesComponent {
    
    title = "List of Courses";
    imageUrl = "https://picsum.photos/400/300/?random";
    colSpan = 2;
    data = "Table test";
    courses;
    isActive = true;
    email2 = "marcosnami@hotmail.com";
    course = {
        title: "The Complete Angular course",
        rating: 4.9745,
        students: 30123,
        price: 90.95,
        percent: 0.232,
        releaseDate: new Date(2016, 3, 1)
    };
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque nunc, facilisis quis sollicitudin a, dictum ut lorem"

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title
    }

    onDivClicked() {
        console.log("Div was clicked!!!");
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("Button was clicked!!!", $event);
    }

    onKeyUp($event) {
        console.log("Enter was pressed!!!");
        console.log("The value is: ", $event.target.value);
    }

    onKeyUpEmail(email) {
        console.log("The email is: ", email);
    }

    onKeyUpTwoWay() {
        console.log("The two way binding email is: ", this.email2);
    }

}