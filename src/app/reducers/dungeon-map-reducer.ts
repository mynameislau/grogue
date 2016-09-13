// counter.ts
import { ActionReducer, Action } from '@ngrx/store';
// import { } from '../actions/dungeon-map-actions';
import { generateTerrain } from '../dungeon/helpers';

import { Map } from 'immutable';
import { IDungeonMap } from '../IAppState.ts';

const defaultWidth = 20;
const defaultHeight = 15;
const defaultState = Map({
  width: defaultWidth,
  height: defaultHeight,
  terrain: generateTerrain(defaultWidth, defaultHeight)
});

export const dungeonMapReducer:ActionReducer<IDungeonMap> = (state:IDungeonMap = defaultState, action:Action) => {
    switch (action.type) {
        default:
            return state;
    }
}
