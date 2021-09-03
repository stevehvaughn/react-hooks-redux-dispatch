let state = { count: 0 };
let incrementAction = { type: "counter/increment" };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  document.body.textContent = state.count
}

function dispatch(action) {
  state = changeState(state, action);
  render()
}

dispatch(incrementAction)
dispatch(incrementAction)
dispatch(incrementAction)
dispatch(incrementAction)
dispatch(incrementAction)
dispatch(incrementAction)
dispatch(incrementAction)
dispatch(incrementAction)

