import { Component } from '@angular/core';

@Component({
  selector: 'udemy-instructor-form',
  templateUrl: './udemy-instructor-form.component.html',
  styleUrls: ['./udemy-instructor-form.component.css']
})
export class UdemyInstructorFormComponent {
  categories = [
    { id: 1, name: "Development" },
    { id: 2, name: "Art"},
    { id: 3, name: " Languages" },
  ];

  submit(value) {
    console.log(value);    
  }
}
