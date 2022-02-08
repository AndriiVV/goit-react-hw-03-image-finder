import { Component } from "react";

class Searchbar extends Component {

  state = {
    input: "",
  }

  handleChange = (e) => { 
    this.setState({input: e.target.value});
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  }

  render() { 
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}
      
  

export default Searchbar;