import { Component, OnInit } from "@angular/core";
import { Todo } from "../interface/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  constructor() {}

  mealPlan: Todo = {
    task: "Make a meal plan.",
    completed: true
  };
  groceries: Todo = {
    task: "Go to the store and buy some groceries for the week.",
    completed: false
  };
  laundry: Todo = {
    task: "Do your damn laundry!",
    completed: false
  };
  hike: Todo = {
    task: "Take the pups to Brighton Rec for a long hike.",
    completed: true
  };
  study: Todo = {
    task: "Work on some of the exercises and go over old notes.",
    completed: false
  };
  haircut: Todo = {
    task: "Schedule an appointment for a haircut.",
    completed: false
  };

  todoList: object[] = [
    this.groceries,
    this.haircut,
    this.hike,
    this.laundry,
    this.mealPlan,
    this.study
  ];

  ngOnInit() {}
}
