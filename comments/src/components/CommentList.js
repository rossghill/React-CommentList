import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    return (
      <div className="comment-list">
        <Comment author="Rick Henry">Cool</Comment>
        <Comment author="Valerie Gibson">Nice</Comment>
      </div>
    );
  }

}

export default CommentList;
