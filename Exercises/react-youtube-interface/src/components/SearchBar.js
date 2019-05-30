import React from 'react';

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
            <img src='#' alt="youTube Logo"/>
            <form onSubmit={this.handleSubmit} className='search-form'>
              {/* <div className='field'> */}
                {/* <label htmlFor='video-search'> </label> */}
                <input
                  className="search-input"
                  onChange={this.handleChange}
                  name='video-search'
                  type='text'
                  placeholder='Search'
                  value={this.state.term}
                />
              {/* </div> */}
            </form>
            <div className="icons-header">
            <i class="fas fa-video"></i>
            </div>
          </div>
        );
      }
}
export default SearchBar;