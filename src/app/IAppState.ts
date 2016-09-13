import { Map } from 'immutable';

export interface IAppState {
  entities:IEntities;
  dungeonMap: IDungeonMap;
};

export interface IMap {
  set:any,
  get:any,
  size:number,
  toArray:any,
  toJS:any;
}

export interface IDungeonMap extends IMap {

}

export interface IEntities extends IMap {
}

export interface IEntity extends IMap {
}
