// counter.ts
import { ActionReducer, Action } from '@ngrx/store';
import {
  ADD_ENTITY,
  DECREMENT,
  RESET
} from '../actions/entities-actions';

import { Map } from 'immutable';
import { IEntities } from '../IAppState.ts';

export const entitiesReducer:ActionReducer<IEntities> = (state:IEntities = Map({}), action:Action) => {
    switch (action.type) {
        case ADD_ENTITY:
            console.log(state);
            return state.set(state.size, Map({ name: 'titi' }));

        default:
            return state;
    }
}
