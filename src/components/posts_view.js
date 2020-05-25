import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import { fetchPost } from "../actions/index";

class PostsView extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.params.post_id);
  }
  render() {
    const { post } = this.props;
    if (!post) return <div></div>;
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back to Index
          </Link>
        </div>
        <h1>{post.title}</h1>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsView);
