import React from 'react';
import '../style/SearchBar.css';
import logo from '../assets/logo.png';

class SearchBar extends React.Component {
    state = {
        term: '' // Default Value - works like placeholder
    };

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    };

    render() {
        return (
          <div className='search-header'>
            <img src={logo} alt="youTube Logo"/>
            <form onSubmit={this.handleSubmit} className='search-form'>
                <input
                  className="search-input"
                  onChange={this.handleChange}
                  name='video-search'
                  type='text'
                  placeholder='Search'
                  value={this.state.term}
                />
            </form>
            <div className="icons-header">
            <i class="fas fa-video"></i>
            </div>
          </div>
        );
      }
}
export default SearchBar;