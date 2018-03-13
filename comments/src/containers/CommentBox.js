import React, {Component} from 'react';
import CommentList from './../components/CommentList';

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
       data: [{ id: 1, author: "Beth", text: "I love cats!" },
              { id: 2, author: "Dogo Argentino", text: "I hate cats! (and other dogs too)"}]
    }
  }

  render() {
    return (
      <div className="commentBox">
        <h2>Comment List</h2>
        <CommentList data ={this.state.data}/>
      </div>
    );
  }
}

export default CommentBox;
