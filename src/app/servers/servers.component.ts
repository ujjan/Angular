import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  createNewServer = false;
  serverCreation = 'No server was created';
  serverName = 'Test Server';
  servers =['First Server', 'Second Server'];
  serverWasCreated = false;
  constructor() {
    setTimeout(() => {
      this.createNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }
  onServerCreation() {
    this.serverWasCreated = true;
    this.servers.push(this.serverName)
    this.serverCreation = 'Server has been created the name is ' + this.serverName;
  }
  onServerUpdate(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
