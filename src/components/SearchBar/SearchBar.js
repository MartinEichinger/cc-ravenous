import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };

    //this.sortByOptionValue = '';

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCombined = this.handleCombined.bind(this);
    //this.handleSortByChange = this.handleSortByChange.bind(this);
  }
  getSortByClass(sortByOption) {
     return this.state.sortBy === sortByOption ? 'active': '';
  }

  handleSortByChange(sortByOption) {
    console.log('handleSortByChange');
    this.setState({
      sortBy: sortByOption
    });
    //this.handleSearch();
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleSearch(event) {
    //console.log('handleSearch');
    //console.log(this.state.term, this.state.location, this.state.sortBy);
    //console.log(event);
    if (this.state.term !== '' && this.state.location !== ''){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }
    event.preventDefault();
  }

  handleCombined(event, sortByOptionValue) {
    //console.log('handleCombined');
    //console.log('hC: ', sortByOptionValue);
    //console.log('hC: ', event);
    this.handleSortByChange(sortByOptionValue);
    this.handleSearch(event);
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      //return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption} </li>;
      //return <li onClick={() => {this.handleSortByChange(sortByOptionValue);}} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption} </li>;
      return <li onClick={(event) => {this.handleCombined(event, sortByOptionValue)}} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption} </li>;
      //return <li onClick={this.handleCombined(event)} className={this.getSortByClass(this.sortByOptionValue)} key={this.sortByOptionValue}>{sortByOption} </li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a href="www.#.com">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
