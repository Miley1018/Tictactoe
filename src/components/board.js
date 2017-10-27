import React,{Component} from 'react'
import Square from './square';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Board extends Component{
  componentWillUpdate(nextProps){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    const board = nextProps.board
    for(let i = 0; i<lines.length; i++){
      const [a,b,c] = lines[i]
      if (board[a]&&(board[a]===board[b])&&(board[a]===board[c])){
        this.props.hasWinner(board[a])
        console.log(board[a])
        break
      }
    }
  }

  render(){
    return(
      <div>
        <table>
          <tbody>
          <tr>
            <td><Square keyID={0} /></td>
            <td><Square keyID={1} /></td>
            <td><Square keyID={2} /></td>
          </tr>
          <tr>
            <td><Square keyID={3} /></td>
            <td><Square keyID={4} /></td>
            <td><Square keyID={5} /></td>
          </tr>
          <tr>
            <td><Square keyID={6} /></td>
            <td><Square keyID={7} /></td>
            <td><Square keyID={8} /></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    board:state.changed.array
  }
}
export default connect(mapStateToProps,actions)(Board) 