import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowComponent } from "./component/show/show.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Work-Calendars-frontend';
}
