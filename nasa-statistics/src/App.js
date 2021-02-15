import React, { Component } from "react";
import "./App.css";
import { Line } from "react-chartjs-2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    }
  }


  async getData() {
    const res = await fetch("http://localhost:5000/");
    const data = await res.text();
    const table = data.split("\n").slice(1);
    let year = [];
    let temp = [];
    table.forEach((row) => {
      const cols = row.split(",");
      year.push(cols[0])
      temp.push(14 + parseFloat(cols[1]))
    });
    this.setState({ chartData: {
      labels: year,
      datasets: [
        {
          label: 'Temperature in °C',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          data: temp
        }
      ]
    }
    });
  }

  componentDidMount(){
    this.getData()
 }


  render(){
  return (
    <div className="App">
      <Line data={this.state.chartData} height="20" width="50"/>
    </div>
  );
  }
}
export default App;
