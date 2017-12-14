import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 123;
  status: String = 'ofline';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'ofline';
  }

  getServerStatus() {
    return this.status;
  }
  getcolor() {
    return this.status === 'online' ? 'green' : 'red';
  }

}
