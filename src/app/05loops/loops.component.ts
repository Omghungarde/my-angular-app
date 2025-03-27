import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  imports: [],
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.css'
})
export class LoopsComponent {
  users=['Piyush','Abhishek','Ganesh','Tejas','Rushi'];
  students=[
    {name:"Piyush", age:27,email:'piyush@test.com'},
    {name:"Abhishek", age:27,email:'abhishek@test.com'},
    {name:"Ganesh", age:27,email:'ganesh@test.com'},
    {name:"Tejas", age:27,email:'tejas@test.com'},
    {name:"Rushi", age:27,email:'rushi@test.com'}
  ]
  val=""
  getName(name:string){
    console.log(name);
  }
}
