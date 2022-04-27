import Axios from 'axios';

// conts
const FETCH_GREETING = 'rails-backend/greetings/FETCH_GREETING';

// actions
const fetchGreeting = (payload) => ({
  type: FETCH_GREETING,
  payload,
});

// state
const initialState = [];

export const fetchGreetingApi = () => async (dispatch) => {
  const returnValue = await Axios.get('http://localhost:3000/api/v1/messages');
  const greeting = returnValue.data.data.greeting.message;
  dispatch(fetchGreeting(greeting));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
