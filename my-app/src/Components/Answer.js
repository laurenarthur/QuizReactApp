import React, { Component, Fragment } from "react";
class Answer extends Component {
 
//  create state
  state = {
    Answers: this.props.anwer,
    Clickcheck:true,
    rightAnswer: this.props.rightAnswer
  };

  // Event on button
  onAnswer = () => {
   
    this.setState({ 
      Clickcheck:false
    });
  
  };
  
  render() {
   
    return (
     
      <Fragment>
     
        { this.state.Clickcheck ? this.state.Answers.map(ans => {
          return <button onClick={this.onAnswer}> {ans}</button>;
        }) : <button > {this.state.rightAnswer}</button>  } 

      </Fragment>
   
    );
  }
}

export default Answer;