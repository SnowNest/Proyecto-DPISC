import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: FirebaseListObservable<any[]>;

  constructor(afDB: AngularFireDatabase) {
    this.items = afDB.list('/bdejemplo');
  }

  title = 'app';
}
