import React, {Component} from 'react';
import CommentList from './../components/CommentList';

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
       data: [{ id: 1, author: "Beth", text: "I love cats!" }]
    }
  }



  render() {
    return (
      <div className="commentBox">
        <CommentList />
      </div>
    );
  }
}

export default CommentBox;
