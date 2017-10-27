import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Square extends Component{
  onClickButton(){
    if(this.props.winner){
      return
    }
    if (this.props.array[this.props.keyID]){
      return
    }
   
    if (!this.props.player||this.props.player=='O'){
      this.props.changeBoard(this.props.keyID,'X')
    }else{
      this.props.changeBoard(this.props.keyID,'O')
    }
  }

  render(){
    if(!this.props.array){
      return(
        <div>
          <button onClick={this.onClickButton.bind(this)}></button>
        </div>
      )
    }
    return(
      <div>
        <button onClick={this.onClickButton.bind(this)}>{this.props.array[this.props.keyID]}</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    array:state.changed.array,
    player:state.changed.presentPlayer,
    winner:state.changed.winner
  }
}
export default connect(mapStateToProps,actions)(Square)