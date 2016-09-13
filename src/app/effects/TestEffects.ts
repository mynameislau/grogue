import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {
  ADD_ENTITY,
  DECREMENT,
  RESET
} from '../actions/entities-actions';

@Injectable()
export class TestEffects {
  constructor(private actions$:Actions) { }

  @Effect() truc$ = this.actions$
            .ofType(ADD_ENTITY)
            .map(action => {
              console.log(action);
              return ({ type: 'top', payload: { nope: 'nope' } });
            });
}
