import React from "react";
import "./index.css";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";
import { fetchData } from "./api";


class App extends React.Component {
  state = {
    data: {},
    country:'',
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country,})

    console.log(fetchedData);
  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h1 className="slogan">Covid tracker</h1>
        </div>
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Chart data ={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
