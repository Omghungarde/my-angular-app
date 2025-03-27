import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  pageTitle:string = "Data Binding in Angular";
  imageUrl:string = "assets/image1.jpg";
  btnStatus:boolean=false;
  change:string ="CSK"
  changeTitle(){
    this.change = "Chennai Super Kings"
  };
  username:string = "";
}
