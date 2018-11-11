import React, {Component} from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {

  state = {
    newLabel: ""
  };

  onChangeInput =(e) => {
      this.setState({
          newLabel: e.target.value
      });
  };

  onSubmitFunc  =(e) => {
    e.preventDefault();
    this.props.onAdded(this.state.newLabel);
    this.setState({
        newLabel: ""
    })
};


  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmitFunc}>
        <input type="text" placeholder="What needs to be done" className="form-control mr-2" onChange={this.onChangeInput} value={this.state.newLabel} />
      <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  };
};

const showRepos =(repos) => repos.reduce((acc, repo) => {
    return acc += `
      <li class="list-group-item">
        <h3>
          <a href="${repo.html_url}">${repo.name}
<span><svg aria-label="star" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1"
 width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
        ${repo.stargazers_count}</span>
<span><svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1"
 width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 
3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 
0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        ${repo.forks_count}</span>
        </a></h3>     
      </li>`;
}, '');