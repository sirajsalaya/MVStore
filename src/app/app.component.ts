import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  fname = 'Angular ' + VERSION.full;
  mname = 'Angular ' + VERSION.major;
  miname = 'Angular ' + VERSION.minor;
  pname = 'Angular ' + VERSION.patch;
}
