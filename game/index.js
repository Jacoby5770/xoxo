import { Map } from 'immutable';
// import { createStore } from 'redux';

let board = Map();

// export default function reducer(state = { turn: 'X', board }, action) {
//   if (action.type === MOVE) {
//     state.board = state.board.setIn(action.coord, action.turn);
// if (action.turn === 'X') {
//   turn = 'O';
// } else {
//   turn = 'X';
// }
//     return state;
//   }
//   return state;
// }

function turnReducer(turn = 'X', action) {
  if (action.type === MOVE) {
    if (action.turn === 'X') {
      turn = 'O';
    } else {
      turn = 'X';
    }
  }
  return turn

}

function boardReducer(board = Map(), action) {
  if (action.type === MOVE) {
    board = board.setIn(action.coord, action.turn);

    return board;
  }

  return board;
}

export default function reducer(state = { winner: null, turn: 'X', board }, action) {
  const newBoard = boardReducer(state.board, action)
  const win = winner(newBoard)
  console.log('winner is', win)

  return {
    turn: turnReducer(state.turn, action),
    board: newBoard,
    winner: win
  }
  // state.turn = turnReducer(state.turn, action);
  // state.board = board(state.board, action);

  // return state;

}


export function move(turn, coord) {
  return {
    type: MOVE,
    turn,
    coord
  };
}

function streak(board, firstCoord, ...remainingCoords) {

  var val = ''

  if (board.getIn(firstCoord) !== undefined) {
    val = board.getIn(firstCoord)
    console.log('value', val)
    console.log('remain', board.getIn(remainingCoords[0]))
    if (board.getIn(remainingCoords[0]) === val && board.getIn(remainingCoords[1]) === val) {
      console.log('val is:', val)
      return val
    }
  }

  return undefined

}

export function winner(board) {
  if (streak(board, [0, 0], [0, 1], [0, 2]) !== undefined) {
    return streak(board, [0, 0], [0, 1], [0, 2])
  }

  if (streak(board, [1, 0], [1, 1], [1, 2]) !== undefined) {
    return streak(board, [1, 0], [1, 1], [1, 2])
  }

  if (streak(board, [2, 0], [2, 1], [2, 2]) !== undefined) {
    return streak(board, [2, 0], [2, 1], [2, 2])
  }

  if (streak(board, [0, 0], [1, 0], [2, 0]) !== undefined) {
    return streak(board, [0, 0], [1, 0], [2, 0])
  }

  if (streak(board, [0, 1], [1, 1], [2, 1]) !== undefined) {
    return streak(board, [0, 1], [1, 1], [2, 1])
  }

  if (streak(board, [0, 2], [1, 2], [2, 2]) !== undefined) {
    return streak(board, [0, 2], [1, 2], [2, 2])
  }

  if (streak(board, [0, 0], [1, 1], [2, 2]) !== undefined) {
    return streak(board, [0, 0], [1, 1], [2, 2])
  }

  if (streak(board, [0, 2], [1, 1], [2, 0]) !== undefined) {
    return streak(board, [0, 2], [1, 1], [2, 0])
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!board.hasIn([i, j])) {
        return null
      }
    }
  }

  return 'draw'
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
