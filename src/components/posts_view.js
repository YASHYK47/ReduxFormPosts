import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import PropTypes from "prop-types";

import { fetchPost, deletePost } from "../actions/index";

class PostsView extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  componentDidMount() {
    this.props.fetchPost(this.props.params.post_id);
  }
  handleClick = () => {
    this.props.deletePost(this.props.post.id).then(() => {
      this.context.router.push("/");
    });
  };
  render() {
    const { post } = this.props;
    if (!post) return <div></div>;
    return (
      <div>
        <div style={{ margin: "20px 0" }}>
          <Link to="/" className="btn btn-primary">
            Back to Index
          </Link>
        </div>
        <h1>{post.title}</h1>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
        <div style={{ margin: "20px 0" }}>
          <button
            className="btn btn-danger"
            onClick={this.handleClick.bind(this)}
          >
            Delete Post
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsView);
