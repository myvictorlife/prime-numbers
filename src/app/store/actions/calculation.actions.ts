
import { createAction } from '@ngrx/store';
import {ActionTypes } from '../types/action-types';

export const calculation = createAction(
  ActionTypes.START_CALCULATION
);
