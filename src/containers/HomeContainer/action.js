import { DECREMENT, INCREMENT } from './constant';

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

export function decrementAction() {
  return {
    type: DECREMENT,
  };
}
