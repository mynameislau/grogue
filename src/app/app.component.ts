import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, StoreModule } from '@ngrx/store';
import { createAddEntityAction } from './actions/entities-actions';
import {
  IAppState,
  IEntities,
  IDungeonMap
} from './IAppState';
import { Map } from 'immutable';

@Component({
  selector: 'my-app',
  template: `
    <main>
      <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
      <div (click)="addEntity()">
        tiititit{{entities | async }}
        <ul>
          <li *ngFor="let entity of entities|async">Bitch</li>
        </ul>
      </div>
      <table>
        <tbody>
          <tr><td>{{dungeonWidth|async}}</td></tr>
        </tbody>
      </table>
    </main>
  `
})
export class AppComponent {
  entities:Observable<IEntities>;
  dungeonMap:Observable<IDungeonMap>;
  dungeonWidth:Observable<number>
  constructor (public store: Store<IAppState>) {
    this.entities = store.select(state => state.entities).map(entities => entities.toArray());
    this.dungeonMap = store.select(state => state.dungeonMap).map(dungeonMap => dungeonMap.toJS());
    this.dungeonWidth = this.dungeonMap.map(dungeonMap => dungeonMap.width);
  }

  addEntity () {
    this.store.dispatch(createAddEntityAction());
  }
}
