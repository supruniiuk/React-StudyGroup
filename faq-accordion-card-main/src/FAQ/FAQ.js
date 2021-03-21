import React from 'react';
import "./FAQ.css"

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false
    };
  }
  handleClick = () =>{
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }
  
  render() {
    return(
    <div className ="questionBlock">
    <p className={this.state.showAnswer ? 'qActive': "q"} onClick = {this.handleClick}>{this.props.question} <svg className = {this.state.showAnswer ? "arrow" : null} width="10" height="7" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></p>
    <p className={this.state.showAnswer ? 'aShow': "a"}>{this.props.answer}</p>
    </div>);
  }
}

 export default FAQ