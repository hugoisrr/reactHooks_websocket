import { RECEIVE_MESSAGE } from "../types";

export default (state, action) => {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        [topic]: [
          ...state[topic],
          {
            from,
            msg
          }
        ]
      };
    default:
      return state;
  }
};
