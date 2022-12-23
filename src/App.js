import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [ ],
      searchField : ' ',
    };

    // this.handleChange = this.handleChange.bind(this)   --->this call after ever method or funtion is apply out the constuctor 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users =>  this.setState({monsters : users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  

  render() {
    const {monsters , searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    return (
      <div className="App">
        <h1 >Monster Rolodex</h1>
          <SearchBox 
           placeholder='search monster'
           handleChange={this.handleChange}
            />
        <CardList monsters = {filteredMonsters } />
      </div>
    );
  }
}

export default App;
