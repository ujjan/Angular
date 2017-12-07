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
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.createNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }
  onServerCreation() {
    this.serverCreation = 'Server has been created';
  }
  onServerUpdate(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
