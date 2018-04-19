import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  //intialize Component level state
  constructor(props){
    super(props);
    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    //we need to go and fetch weather data
    this.props.fetchWeather(this.state.term); //when user sumbit we call our action creator fetchWeather
    this.setState({ term:'' }); //clearing user input

  }


  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
      <input
      placeholder = "Get weather details of your favorite city"
      className   = "form-control"
      value       = {this.state.term}
      onChange    = {this.onInputChange} />

      <span className="input-group-btn">
      <button type= "submit" className="btn btn-secondary"> Submit </button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
