const Stopwatch = React.createClass({
  
  getInitialState: function(){
    return {
      running: false,
      timer: 0
    }
  },
  
 componentDidMount(){
   this.clearIt = setInterval(this.runTiming, 100);
 },
  
 componentWillUnmount(){
   clearInterval(this.clearIt);
 }, 
 runTiming: function(){
   if(this.state.running){
     this.state.timer += (100 / 1000);
     this.setState(this.state);
   }
 },
  
  startTimer: function(){
    this.setState({
      running: true
    });
  },
  
  stopTimer: function(){
    this.setState({
      running: false
    });
  },
  
  resetTimer: function(){
    this.setState({
      timer: 0
    });
  },
  
  render: function(){
    return (
       <div className="stopwatch">
          <div className="tick">{Math.round(this.state.timer)}</div>
        {this.state.running ? <button onClick={this.stopTimer} className="stop">Stop</button> : <button onClick={this.startTimer} className="start">Start</button>}
        <button onClick={this.resetTimer} className="reset">Reset</button>
      </div>
    );
  }
});

ReactDOM.render(<Stopwatch />, document.getElementById('display'));
                