
import { createAction } from '@ngrx/store';

enum ActionTypes {
  START_CALCULATION = 'START_CALCULATION',
}

export const calculation = createAction(
  ActionTypes.START_CALCULATION
);
