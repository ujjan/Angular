import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [ `
    p {
        color: cornflowerblue;
      }
  `]
})
export class ServerComponent {
serverId = 12345;
status = 'ofline';
getServerStatus() {
  return status;
}
}
