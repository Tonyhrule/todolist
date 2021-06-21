import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
    this.loadData = this.loadData.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  loadData() {
    return this.state.list.map((data, index) => {
      return (
        <div className="item">
          <p>{data.data}</p>
          <button index={index} className="delete" onClick={this.delete}>X</button>
          <input type="checkbox" checked={data.checked} onChange={function(i){
            let temp = this.state.list.concat();
            if (temp[i].checked) temp[i].checked = false;
            else temp[i].checked = true;
            this.setState({ list: temp });
          }.bind(this, index)} />
        </div>
      );
    });
  }
  add() {
    this.setState({
      list: this.state.list.concat({data: this.state.inputValue, checked: false})
    });
  }
  delete(e) {
    let index = Number(e.target.getAttribute("index"));
    let temp = this.state.list.concat();
    temp.splice(index, 1);
    this.setState({
      list: temp
    });
  }
  updateInput(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  render() {
    return (
      <div id="App">
        <input onChange={this.updateInput} />
        <button onClick={this.add}>Add</button>
        <div id="list">
          {this.loadData()}
        </div>
      </div>
    );
  }
}

export default App;