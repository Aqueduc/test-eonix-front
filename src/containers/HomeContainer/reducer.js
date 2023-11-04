import { INCREMENT,DECREMENT,RESET } from './constant';

export const initialState = {
  counter: 0
};

export default function homeContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
      case DECREMENT:
        if(state.counter === 0)
        return {counter: state.counter}
      return {
        counter: state.counter - 1,
      };
      case RESET:
      return {
        counter: 0,
      };
    default:
      return state;
  }
}
