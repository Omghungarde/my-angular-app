import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import FormsModule

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, BindingComponent, RouterOutlet],
  //  
  // template: `
  // <h1>Angular 4 App</h1>
  // `A
  templateUrl: './app.component.html'
  // styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'my-angular-app';
  // imageUrl:string = "assets/image1.jpg";
  title:string="AngualrApp";
  users = ["John","Sam","Michel"];
}
