const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// Create store (with the corrected function name)
const store = Redux.createStore(counterReducer);

// Render function to update the UI
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// Initial render and subscription to state changes
render();
store.subscribe(render);

// Button click listeners
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(3));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
