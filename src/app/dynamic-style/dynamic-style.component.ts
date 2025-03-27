import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  imports: [],
  templateUrl: './dynamic-style.component.html',
  styleUrl: './dynamic-style.component.css'
})
export class DynamicStyleComponent {
bgcolor='gold';
fontSize='25px';
headingSizeBig='50px';
headingSizeSmall='20px';
zoom=false;
marginTop='60px'
updateSize(){
  this.zoom=!this.zoom
}
}
