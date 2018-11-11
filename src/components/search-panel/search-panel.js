import React, {Component} from "react";


export default class SearchPanel extends Component {

  state= {
    term: ""
  };

  onSearchFunc =(e) => {
    const term=e.target.value;
    this.setState({term});
    this.props.onSearchFunc(term);
}

 render() {

        return <input type="text" className="form-control" placeholder="Type to search" value={this.state.term} onChange={this.onSearchFunc}/>;
    };

};
