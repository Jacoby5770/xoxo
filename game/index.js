import { Map } from 'immutable';
// import { createStore } from 'redux';

let board = Map();

export default function reducer(state = { turn: 'X', board }, action) {
  if (action.type === MOVE) {
    state.board = state.board.setIn(action.coord, action.turn);
    if (action.turn === 'X') {
      state.turn = 'O';
    } else {
      state.turn = 'X';
    }
    return state;
  }
  return state;
}

export function move(turn, coord) {
  return {
    type: MOVE,
    turn,
    coord,
  };
}

// action types
const MOVE = 'move';

// store.dispatch({ type: 'MOVE', action: { position: [X, Y] } });

// const store = createStore(reducer);
// store.subscribe(() => {
//   console.log(
//     'The store state has changed. Here is the new state',
//     store.getState()
//   );
// });

// import { createStore } from 'redux';

// // HTML elements
// const balance = document.getElementById('balance');
// const deposit5 = document.getElementById('deposit5');
// const deposit25 = document.getElementById('deposit25');
// const withdraw5 = document.getElementById('withdraw5');
// const withdraw25 = document.getElementById('withdraw25');

// //action types
// const DEPOSIT = 'deposit';
// const WITHDRAW = 'withdraw';

// const reducer = (state = { balance: 0 }, action) => {
//   switch (action.type) {
//     case 'deposit':
//       return { balance: state.balance + action.amount };
//     case 'withdraw':
//       return { balance: state.balance - action.amount };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
// store.subscribe(() => {
//   console.log(
//     'The store state has changed. Here is the new state',
//     store.getState()
//   );
// });

// // event handlers on buttons
// deposit5.onclick = () => store.dispatch({ type: DEPOSIT, amount: 5 });
// deposit25.onclick = () => store.dispatch({ type: DEPOSIT, amount: 25 });
// withdraw5.onclick = () => store.dispatch({ type: WITHDRAW, amount: 5 });
// withdraw25.onclick = () => store.dispatch({ type: WITHDRAW, amount: 25 });
