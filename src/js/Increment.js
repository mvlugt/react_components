var Increment = React.createClass({
  getInitialState: function() {
  	return {counter: 0};
  },
  clickIncrement: function() {
  	this.setState({counter: this.state.counter + 1});
  },
  render: function(){
    return (
      <div>
        <button onClick={this.clickIncrement}> {this.state.counter} </button>
      </div>
    )
  }
});