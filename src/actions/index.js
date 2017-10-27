export const CHANGE_BOARD = 'CHANGE_BOARD'
export const HAS_WINNER='HAS_WINNER'

export function changeBoard(keyID,changedPlayer){
  return{
    type:CHANGE_BOARD,
    payload:{keyID,changedPlayer}
  }
}

export function hasWinner(winner){
  return{
    type:HAS_WINNER,
    payload:winner
  }
}