import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import FormsModule
import { Profilecomponent } from './Profile/profile.component';

import { CounterComponent } from './counter/counter.component';
import { log } from 'console';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, BindingComponent, RouterOutlet, Profilecomponent, CounterComponent],
  //  
  // template: `
  // <h1>Angular 4 App</h1>
  // `
  templateUrl: './app.component.html'
  // styleUrl: './app.component.css'
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


