import { Action } from '@ngrx/store';

export const ADD_ENTITY:string = 'ADD_ENTITY';
export const DECREMENT:string = 'DECREMENT';
export const RESET:string = 'RESET';

export const createAddEntityAction = () => ({
  type: ADD_ENTITY
});
