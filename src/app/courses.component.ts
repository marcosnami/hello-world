import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: 
    `
        <h2>{{ "Title: " + title }}</h2>
        <h2>{{ "Title: " + getTitle() }}</h2>
        <hr>
        <h2 [textContent]="title"></h2>
    `,
    templateUrl: './courses.component.html'
 
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
    numbers = [1, 2, 3];
    viewMode = "other list";
    coursesFor = [
        { id:1, name: 'course1' },
        { id:2, name: 'course2' },
        { id:3, name: 'course3' }
    ];

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

    onAdd() {
        this.coursesFor.push({ id: 4, name: "course4" });
    }

    onRemove(courseFor) {
        let index = this.coursesFor.indexOf(courseFor);
        this.coursesFor.splice(index, 1);
    }

    onChange(courseFor) {
        courseFor.name = 'special course';
    }

}