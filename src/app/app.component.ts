import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly _userData: UsersService) {}
  inputText: string = ''

    ngOnInit() {
      /* const bata = this._userData.getUser('Hugo')
      console.log('Ok é algo: ',bata) */
  }

}
