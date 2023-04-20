import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeatures:string = "recipe"
  onNavigate(value:string){
  this.loadedFeatures = value;
 }
}
