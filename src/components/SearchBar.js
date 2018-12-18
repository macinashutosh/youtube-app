import React,{Component} from 'react';
import "./SearchBar.css";

class SearchBar extends Component{
    constructor(props){
        super();
        this.state = {
            searchContent: ""
        }
    }
    inputTookPlace = e => {
        // console.log(e.currentTarget.value);
        this.setState({
            searchContent:e.currentTarget.value
        })
    }
    render(){
      return <div className="header">
        <input id="search-bar" onChange = {this.inputTookPlace.bind(this)} value={this.state.searchContent} ></input>
      </div>
    }
}
export default SearchBar;