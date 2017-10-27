import {CHANGE_BOARD,HAS_WINNER} from '../actions';

export default function(state={array:Array(9).fill(null)},action){
  switch(action.type){
    case CHANGE_BOARD:{
      const arrayNew = [...state.array]
      const {keyID} = action.payload
      const {changedPlayer} = action.payload
      arrayNew[keyID] = changedPlayer
      console.log(arrayNew)
      return {...state,array:arrayNew,presentPlayer:changedPlayer}
    }
    case HAS_WINNER:{
      return {...state,winner:action.payload}
    }
  }
  return state
}