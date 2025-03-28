import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './01binding/binding.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import FormsModule
import { Profilecomponent } from './00Profile/profile.component';

import { CounterComponent } from './02counter/counter.component';
import { log } from 'console';
import { EventAngularComponent } from './07event-angular/event-angular.component';
import { GetsetComponent } from './03getset/getset.component';
import { IfElseComponent } from './04if-else/if-else.component';
import { PracticeMeComponent } from './-1practice-me/practice-me.component';
import { LoopsComponent } from './05loops/loops.component';
import { SignalsAllComponent } from './06signals-all/signals-all.component';
import { LoopcontextualComponent } from "./08loopcontextual/loopcontextual.component";
import { TwowaybindingComponent } from './09twowaybinding/twowaybinding.component';
import { TodoListComponent } from './10todo-list/todo-list.component';
import { DynamicStyleComponent } from "./11dynamic-style/dynamic-style.component";
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, BindingComponent, RouterOutlet, Profilecomponent, CounterComponent, EventAngularComponent, GetsetComponent, IfElseComponent, PracticeMeComponent, LoopsComponent, SignalsAllComponent, LoopcontextualComponent, TwowaybindingComponent, TodoListComponent, DynamicStyleComponent],
  //  
  // template: `
  // <h1>Angular 4 App</h1>
  // `
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'my-angular-app';
  // imageUrl:string = "assets/image1.jpg";
  title:string="AngualrApp";
  users = ["John","Sam","Michel"];

  handleclickEvent(){
    alert('Work');
    this.handleclickConsole();//in function calling another function 
    
  }
  handleclickConsole(){
    console.log("Work Succefully");
    
  }
  
}


